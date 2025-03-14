import { ExchangePayload, Manifest } from "./interfaces";
export declare function getInputValue<T extends number | string | boolean>(input: ExchangePayload, manifest: Manifest, id: string): T;
export declare function getOptionalInputValue<T extends number | string | boolean>(input: ExchangePayload, manifest: Manifest, id: string): T | undefined;
