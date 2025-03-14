package com.openbpt.service.core.manifest;

public enum PayloadType {
    BOOLEAN("BOOLEAN"),
    STRING("STRING"),
    NUMBER("NUMBER"),
    MODEL("MODEL"),
    CURRENT_MODEL("CURRENT_MODEL"),
    ENUM("ENUM");

    private final String value;

    private PayloadType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public static PayloadType fromString(String text) {
        for (PayloadType s : PayloadType.values()) {
            if (s.value.equalsIgnoreCase(text)) {
                return s;
            }
        }
        throw new IllegalArgumentException("Invalid status: " + text);
    }
}
