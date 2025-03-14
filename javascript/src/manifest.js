import { createRequire } from "module";
const require = createRequire(import.meta.url);
const OpenBPT = require("../lib/core/index.cjs");

const { ModelType, PayloadType, config } = OpenBPT;

// TODO: Edit the manifest to match your service's requirements
export const manifest = {
  id: "templateService",
  version: "1.0.0",
  name: "Template Service",
  description: "A template service for development purposes.",
  url: config.serviceUrl,
  ttl: config.heartbeatTimeout,
  input: [
    {
      id: "number",
      name: "Number",
      description: "A number",
      type: PayloadType.NUMBER,
      isOptional: false,
    },
    {
      id: "optionalNumber",
      name: "Number",
      description: "An optional number",
      type: PayloadType.NUMBER,
      isOptional: true,
    },
    {
      id: "string",
      name: "String",
      description: "A string",
      type: PayloadType.STRING,
      isOptional: false,
    },
    {
      id: "boolean",
      name: "Boolean",
      description: "A boolean",
      type: PayloadType.BOOLEAN,
      isOptional: false,
    },
    {
      id: "model",
      name: "Model",
      description: "The currently loaded model",
      type: PayloadType.CURRENT_MODEL,
      modelType: ModelType.BPMN_PROCESS,
      isOptional: false,
    },
  ],
  output: [
    {
      id: "addToNumber",
      name: "1-Adder",
      description:
        "Returns the given number incremented by 1 (or optionally by optional number)",
      type: PayloadType.NUMBER,
    },
    {
      id: "addExclamationMarkToString",
      name: "!-Adder",
      description:
        "Returns the given string with an exclamation mark at the end",
      type: PayloadType.STRING,
    },
    {
      id: "getOppositeBoolean",
      name: "Opposite Boolean",
      description: "Returns the opposite of the given boolean",
      type: PayloadType.BOOLEAN,
    },
    {
      id: "newModel",
      name: "New Model",
      description: "Returns a new model",
      type: PayloadType.MODEL,
      modelType: ModelType.BPMN_PROCESS,
      saveModel: true,
    },
  ],
};

export default manifest;
