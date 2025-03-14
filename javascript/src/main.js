import run from "./service.js";
import manifest from "./manifest.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const OpenBPT = require("../lib/core/index.cjs");

OpenBPT.init(manifest, run);
