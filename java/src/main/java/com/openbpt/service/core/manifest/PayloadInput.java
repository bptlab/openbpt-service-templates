package com.openbpt.service.core.manifest;

public class PayloadInput extends Payload {

    public boolean isOptional = false;

    public PayloadInput(String name, String id, String description, PayloadType type) {
        super(name, id, description, type);
    }

    public PayloadInput(String name, String id, String description, PayloadType type, boolean isOptional) {
        super(name, id, description, type);
        this.isOptional = isOptional;
    }

    public static class BOOLEAN extends PayloadInput {

        public BOOLEAN(String name, String id, String description) {
            super(name, id, description, PayloadType.BOOLEAN);
        }

        public BOOLEAN(String name, String id, String description, boolean isOptional) {
            super(name, id, description, PayloadType.BOOLEAN, isOptional);
        }
    }

    public static class STRING extends PayloadInput {

        public STRING(String name, String id, String description) {
            super(name, id, description, PayloadType.STRING);
        }

        public STRING(String name, String id, String description, boolean isOptional) {
            super(name, id, description, PayloadType.STRING, isOptional);
        }
    }

    public static class NUMBER extends PayloadInput {

        public NUMBER(String name, String id, String description) {
            super(name, id, description, PayloadType.NUMBER);
        }

        public NUMBER(String name, String id, String description, boolean isOptional) {
            super(name, id, description, PayloadType.NUMBER, isOptional);
        }
    }

    public static class MODEL extends PayloadInput {

        public ModelType modelType;

        public MODEL(String name, String id, String description, ModelType modelType) {
            super(name, id, description, PayloadType.MODEL);
            this.modelType = modelType;
        }

        public MODEL(String name, String id, String description, ModelType modelType, boolean isOptional) {
            super(name, id, description, PayloadType.MODEL, isOptional);
            this.modelType = modelType;
        }
    }

    public static class CURRENT_MODEL extends PayloadInput {

        public ModelType modelType;

        public CURRENT_MODEL(String name, String id, String description, ModelType modelType) {
            super(name, id, description, PayloadType.CURRENT_MODEL);
            this.modelType = modelType;
        }

        public CURRENT_MODEL(String name, String id, String description, ModelType modelType, boolean isOptional) {
            super(name, id, description, PayloadType.CURRENT_MODEL, isOptional);
            this.modelType = modelType;
        }
    }

    public static class ENUM extends PayloadInput {

        public String[] options;

        public ENUM(String name, String id, String description, String[] options) {
            super(name, id, description, PayloadType.ENUM);
            this.options = options;
        }

        public ENUM(String name, String id, String description, String[] options, boolean isOptional) {
            super(name, id, description, PayloadType.ENUM, isOptional);
            this.options = options;
        }
    }
}
