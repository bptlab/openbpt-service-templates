import { ExchangePayload, getInputValue, getOptionalInputValue } from "openbpt-service-core";
import { manifest } from "./manifest";

// TODO: Edit the run function to match your service's requirements
export default async function run(input: ExchangePayload): Promise<ExchangePayload> {
  const n = getInputValue<number>(input, manifest, "number");
  const on = getOptionalInputValue<number>(input, manifest, "optionalNumber");
  const s = getInputValue<string>(input, manifest, "string");
  const b = getInputValue<boolean>(input, manifest, "boolean");
  const m = getInputValue<string>(input, manifest, "model");

  return {
    addToNumber: on ? n + on : n + 1,
    addExclamationMarkToString: `${s}!`,
    getOppositeBoolean: !b,
    newModel: m,
  };
}
