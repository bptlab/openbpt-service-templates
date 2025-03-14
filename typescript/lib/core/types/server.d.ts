import { ExchangePayload, Manifest } from "./interfaces";
export declare function init(manifest: Manifest, runFunction: (input: ExchangePayload) => Promise<ExchangePayload>): void;
