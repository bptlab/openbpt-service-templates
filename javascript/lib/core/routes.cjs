"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const logger_1 = __importDefault(require("./logger.cjs"));
async function routes(fastify, options) {
  const { manifest, runFunction } = options;
  fastify.get("/healthcheck", async function handler(request, reply) {
    logger_1.default.info("Received '/healthcheck' request");
    reply.code(200).send({
      success: true,
      id: manifest.id,
    });
  });
  fastify.post("/run", async function handler(request, reply) {
    logger_1.default.info("Received '/run' request");
    try {
      const input = request.body;
      const result = await runFunction(input);
      manifest.output.forEach((output) => {
        const outputValue = result[output.id];
        if (outputValue === undefined || outputValue === null) {
          throw new Error(`Output with id ${output.id} not found.`);
        }
      });
      reply.code(200).send(result);
    } catch (error) {
      logger_1.default.error(error);
      reply.code(500).send({
        message:
          (error === null || error === void 0 ? void 0 : error.message) ||
          "Internal service error",
      });
    }
  });
}
exports.routes = routes;
