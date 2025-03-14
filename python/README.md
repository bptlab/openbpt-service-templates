# OpenBPT Service Template (Python)

This Python template facilitates the development of services for OpenBPT, providing essential scaffolding to get started quickly.

**Important notice:** The Python service template is currently only suited for development and is not ready for production yet.

## Setup

Follow these steps to set up the environment:

1. Clone this repository.
2. Create and activate a virtual environment:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On macOS/Linux
   venv\Scripts\activate     # On Windows
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. (Optional) Adapt the `.env.development` configuration.

## Writing Your Service

Develop your service by focusing on two primary components: the **manifest** and the **run function**.

- **Manifest**: Defined in `manifest.json`, this file contains a template that you can customize based on your service’s requirements.
  - **Important**: If the service accepts inputs or outputs of type `MODEL` or `CURRENT_MODEL`, set the `modelType` property accordingly.
  - If a model output should be saved in the backend, specify it using `"saveModel": true`.

- **Run Function**: Implemented in `service.py`, this function processes input values and generates the corresponding outputs. The function must return an output dictionary that aligns with the **output IDs** defined in the manifest.

## Starting the Service

- **Development Mode**: Start the service with:
   ```sh
   python src/app.py
   ```

The service automatically registers itself with the **service manager** and periodically sends **heartbeats** to maintain connectivity.

## Testing and Linting

The service is preconfigured with **pytest** for testing and **flake8** for linting.

- **Flake8 Configuration**: Customize linting rules in `.flake8`.
- **Pytest Configuration**: Modify test settings in `pytest.ini`.

To perform linting, execute:

```sh
flake8 src/
```

To run tests, use:

```sh
pytest tests/
```
