package com.openbpt.service.core.manifest;

public enum ModelType {
    BPMN_PROCESS("BPMN_PROCESS"),
    BPMN_CHOREOGRAPHY("BPMN_CHOREOGRAPHY"),
    DMN("DMN"),
    PETRI_NET("PETRI_NET");

    private final String value;

    private ModelType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public static ModelType fromString(String text) {
        for (ModelType s : ModelType.values()) {
            if (s.value.equalsIgnoreCase(text)) {
                return s;
            }
        }
        throw new IllegalArgumentException("Invalid status: " + text);
    }
}
