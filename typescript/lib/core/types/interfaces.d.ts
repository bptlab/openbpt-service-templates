export interface ExchangePayload {
    [key: string]: boolean | number | string | undefined;
}
export declare enum PayloadType {
    BOOLEAN = "BOOLEAN",
    STRING = "STRING",
    NUMBER = "NUMBER",
    MODEL = "MODEL",
    CURRENT_MODEL = "CURRENT_MODEL",
    ENUM = "ENUM"
}
export declare enum ModelType {
    BPMN_PROCESS = "BPMN_PROCESS",
    BPMN_CHOREOGRAPHY = "BPMN_CHOREOGRAPHY",
    BPMN_CONSTRAINTS = "BPMN_CONSTRAINTS",
    DMN = "DMN",
    PETRI_NET = "PETRI_NET"
}
export declare enum DataFormat {
    JSON = "JSON",
    XML = "XML"
}
export interface PayloadDescription {
    id: string;
    name: string;
    description: string;
    type: PayloadType;
    modelType?: ModelType;
    dataFormat?: DataFormat;
}
export interface PayloadOutputDescription extends PayloadDescription {
    saveModel?: boolean;
}
export interface PayloadInputDescription extends PayloadDescription {
    isOptional: boolean;
    options?: string[];
}
export interface Manifest {
    id: string;
    version: string;
    name: string;
    description: string;
    url: string;
    ttl: number;
    input: PayloadInputDescription[];
    output: PayloadOutputDescription[];
}
