def run(input_data):
    output_data = {}

    n = input_data.get("number")
    on = input_data.get("optionalNumber")
    s = input_data.get("string")
    b = input_data.get("boolean")
    m = input_data.get("model")

    output_data["addToNumber"] = n + 1 if on is None else n + on
    output_data["addExclamationMarkToString"] = f"{s}!"
    output_data["getOppositeBoolean"] = not b
    output_data["newModel"] = m

    return output_data
