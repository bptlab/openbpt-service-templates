import { FastifyInstance } from 'fastify';
import { ExchangePayload, Manifest } from './interfaces';
export declare function routes(fastify: FastifyInstance, options: {
    manifest: Manifest;
    runFunction: (input: ExchangePayload) => Promise<ExchangePayload>;
}): Promise<void>;
