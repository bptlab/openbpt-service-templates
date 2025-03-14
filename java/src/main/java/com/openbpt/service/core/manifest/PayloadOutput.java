package com.openbpt.service.core.manifest;

public class PayloadOutput extends Payload {

    public PayloadOutput(String name, String id, String description, PayloadType type) {
        super(name, id, description, type);
    }

    public static class BOOLEAN extends PayloadOutput {

        public BOOLEAN(String name, String id, String description) {
            super(name, id, description, PayloadType.BOOLEAN);
        }
    }

    public static class STRING extends PayloadOutput {

        public STRING(String name, String id, String description) {
            super(name, id, description, PayloadType.STRING);
        }
    }

    public static class NUMBER extends PayloadOutput {

        public NUMBER(String name, String id, String description) {
            super(name, id, description, PayloadType.NUMBER);
        }
    }

    public static class MODEL extends PayloadOutput {

        public ModelType modelType;
        public boolean saveModel = false;
        public boolean autoFormatModel = false;

        public MODEL(String name, String id, String description, ModelType modelType, boolean saveModel) {
            super(name, id, description, PayloadType.MODEL);
            this.modelType = modelType;
            this.saveModel = saveModel;
        }

        public MODEL(String name, String id, String description, ModelType modelType, boolean saveModel, boolean autoFormatModel) {
            super(name, id, description, PayloadType.MODEL);
            this.modelType = modelType;
            this.saveModel = saveModel;
            this.autoFormatModel = autoFormatModel;
        }
    }

    public static class ENUM extends PayloadOutput {

        public String[] options;

        public ENUM(String name, String id, String description, String[] options) {
            super(name, id, description, PayloadType.ENUM);
            this.options = options;
        }
    }
}
