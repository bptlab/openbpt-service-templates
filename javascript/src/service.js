import { createRequire } from "module";
import { manifest } from "./manifest.js";
const require = createRequire(import.meta.url);
const OpenBPT = require("../lib/core/index.cjs");

const { getInputValue, getOptionalInputValue } = OpenBPT;

// TODO: Edit the run function to match your service's requirements
export default async function run(input) {
  const n = getInputValue(input, manifest, "number");
  const on = getOptionalInputValue(input, manifest, "optionalNumber");
  const s = getInputValue(input, manifest, "string");
  const b = getInputValue(input, manifest, "boolean");
  const m = getInputValue(input, manifest, "model");

  return {
    addToNumber: on ? n + on : n + 1,
    addExclamationMarkToString: `${s}!`,
    getOppositeBoolean: !b,
    newModel: m,
  };
}
