"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataFormat = exports.ModelType = exports.PayloadType = void 0;
var PayloadType;
(function (PayloadType) {
    PayloadType["BOOLEAN"] = "BOOLEAN";
    PayloadType["STRING"] = "STRING";
    PayloadType["NUMBER"] = "NUMBER";
    PayloadType["MODEL"] = "MODEL";
    PayloadType["CURRENT_MODEL"] = "CURRENT_MODEL";
    PayloadType["ENUM"] = "ENUM";
})(PayloadType || (exports.PayloadType = PayloadType = {}));
var ModelType;
(function (ModelType) {
    ModelType["BPMN_PROCESS"] = "BPMN_PROCESS";
    ModelType["BPMN_CHOREOGRAPHY"] = "BPMN_CHOREOGRAPHY";
    ModelType["BPMN_CONSTRAINTS"] = "BPMN_CONSTRAINTS";
    ModelType["DMN"] = "DMN";
    ModelType["PETRI_NET"] = "PETRI_NET";
})(ModelType || (exports.ModelType = ModelType = {}));
var DataFormat;
(function (DataFormat) {
    DataFormat["JSON"] = "JSON";
    DataFormat["XML"] = "XML";
})(DataFormat || (exports.DataFormat = DataFormat = {}));
