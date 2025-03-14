"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptionalInputValue = exports.getInputValue = void 0;
const interfaces_1 = require("./interfaces");
function getInputValue(input, manifest, id) {
    return getOptionalInputValue(input, manifest, id);
}
exports.getInputValue = getInputValue;
function getOptionalInputValue(input, manifest, id) {
    const parameterConfiguration = manifest.input.find((payload) => payload.id.toLowerCase() === id.toLowerCase());
    if (parameterConfiguration === undefined) {
        throw new Error(`Input value with id ${id} not found in manifest.`);
    }
    const value = input[parameterConfiguration.id];
    if (value === undefined || value === null) {
        if (parameterConfiguration.isOptional) {
            return undefined;
        }
        else {
            throw new Error(`Could not find input parameter with id ${id}.`);
        }
    }
    const valueType = parameterConfiguration.type;
    if (valueType === interfaces_1.PayloadType.BOOLEAN && typeof value !== "boolean") {
        throw new Error(`Input value with id ${id} is not of type BOOLEAN.`);
    }
    if (valueType === interfaces_1.PayloadType.STRING && typeof value !== "string") {
        throw new Error(`Input value with id ${id} is not of type STRING.`);
    }
    if (valueType === interfaces_1.PayloadType.NUMBER && typeof value !== "number") {
        throw new Error(`Input value with id ${id} is not of type NUMBER.`);
    }
    if (valueType === interfaces_1.PayloadType.MODEL && typeof value !== "string") {
        throw new Error(`Input value with id ${id} is not of type STRING (MODEL).`);
    }
    if (valueType === interfaces_1.PayloadType.CURRENT_MODEL && typeof value !== "string") {
        throw new Error(`Input value with id ${id} is not of type STRING (CURRENT_MODEL).`);
    }
    if (valueType === interfaces_1.PayloadType.ENUM) {
        if (typeof value !== "string") {
            throw new Error(`Input value with id ${id} is not of type STRING (ENUM).`);
        }
        else if (!parameterConfiguration.options ||
            !parameterConfiguration.options
                .map((v) => v.toLowerCase())
                .includes(value.toLowerCase())) {
            throw new Error(`Input value with id ${id} is not a valid option for ENUM.`);
        }
    }
    return value;
}
exports.getOptionalInputValue = getOptionalInputValue;
