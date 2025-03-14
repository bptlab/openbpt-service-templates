package com.openbpt.service.core.manifest;

public class Payload {

    public String name;
    public String id;
    public String description;
    public PayloadType type;

    Payload(String name, String id, String description, PayloadType type) {
        this.name = name;
        this.id = id;
        this.description = description;
        this.type = type;
    }
}
