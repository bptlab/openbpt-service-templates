import pytest
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../src")))

from service import run  # Import the function to be tested

def test_run_with_valid_inputs():
    """Test the run function with valid inputs."""
    input_data = {
        "number": 5,
        "optionalNumber": 2,
        "string": "Hello",
        "boolean": True,
        "model": {"key": "value"}
    }

    expected_output = {
        "addToNumber": 7,  # 5 + 2
        "addExclamationMarkToString": "Hello!",
        "getOppositeBoolean": False,
        "newModel": {"key": "value"}
    }

    assert run(input_data) == expected_output

def test_run_without_optional_number():
    """Test when optionalNumber is missing."""
    input_data = {
        "number": 5,
        "string": "Hello",
        "boolean": False,
        "model": {"key": "value"}
    }

    expected_output = {
        "addToNumber": 6,  # 5 + 1
        "addExclamationMarkToString": "Hello!",
        "getOppositeBoolean": True,
        "newModel": {"key": "value"}
    }

    assert run(input_data) == expected_output

def test_run_with_edge_cases():
    """Test edge cases such as zero values, empty strings, and booleans."""
    input_data = {
        "number": 0,
        "optionalNumber": 0,
        "string": "",
        "boolean": False,
        "model": None
    }

    expected_output = {
        "addToNumber": 0,  # 0 + 0
        "addExclamationMarkToString": "!",
        "getOppositeBoolean": True,
        "newModel": None
    }

    assert run(input_data) == expected_output

def test_run_with_missing_keys():
    """Test when some required keys are missing."""
    input_data = {}

    with pytest.raises(TypeError):  # Expecting TypeError since 'number' is None
        run(input_data)