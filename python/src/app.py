import os
import time
import json
import requests
from flask import Flask, jsonify, request
from dotenv import load_dotenv
from service import run

load_dotenv(".env.development")

SERVICE_URL = os.getenv("SERVICE_URL", "http://127.0.0.1:5000")
HOST = os.getenv("HOST", "127.0.0.1")
PORT = int(os.getenv("PORT", 5000))
SERVICE_MANAGER_URL = os.getenv("SERVICE_MANAGER_URL", "http://127.0.0.1:4000/service-manager/services")
BACKEND_API_KEY = os.getenv("BACKEND_API_KEY", "dev")
HEARTBEAT_TIMEOUT = int(os.getenv("HEARTBEAT_TIMEOUT", 60000))

with open("src/manifest.json", "r") as f:
    manifest = json.load(f)

app = Flask(__name__)


@app.route("/healthcheck", methods=["GET"])
def healthcheck():
    return jsonify({
        "success": True,
        "id": manifest["id"]
    })


@app.route("/run", methods=["POST"])
def run_service():
    if not request.is_json:
        return jsonify({"error": "Invalid input, expected JSON."}), 400

    input_data = request.get_json()
    output_data = run(input_data)  # Call the function from service_logic.py

    return jsonify(output_data)


def register_service():
    url = f"{SERVICE_MANAGER_URL}{os.getenv('REGISTRATION_ENDPOINT', '/register')}"
    headers = {
        "x-backend-api-key": BACKEND_API_KEY,
        "Content-Type": "application/json"
    }

    # Copy manifest and add url & ttl based on environment variables
    data = {
        "manifest": {
            **manifest,
            "url": SERVICE_URL,
            "ttl": HEARTBEAT_TIMEOUT
        }
    }

    for _ in range(int(os.getenv("REGISTRATION_TRIES", 5))):
        response = requests.post(url, headers=headers, json=data)
        if response.status_code == 201:
            print("Service registered successfully.")
            return

        print("Registration failed. Retrying in", os.getenv("REGISTRATION_RETRY_DELAY", 5000), "ms...")
        time.sleep(int(os.getenv("REGISTRATION_RETRY_DELAY", 5000)) / 1000)


def send_heartbeat():
    url = f"{SERVICE_MANAGER_URL}/{manifest['id']}{os.getenv('HEARTBEAT_ENDPOINT', '/heartbeat')}"
    headers = {"x-backend-api-key": BACKEND_API_KEY}
    while True:
        time.sleep(int(os.getenv("HEARTBEAT_INTERVAL", 30000)) / 1000)
        response = requests.post(url, headers=headers)
        if response.status_code != 201:
            print("Heartbeat failed. Retrying...")


if __name__ == "__main__":
    from threading import Thread

    # Register service at startup
    register_service()

    # Start heartbeat thread
    Thread(target=send_heartbeat, daemon=True).start()

    # Run the Flask application
    app.run(host=HOST, port=PORT)
