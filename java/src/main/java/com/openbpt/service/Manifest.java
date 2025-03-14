package com.openbpt.service;

import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import com.openbpt.service.core.manifest.ModelType;
import com.openbpt.service.core.manifest.PayloadInput;
import com.openbpt.service.core.manifest.PayloadOutput;

import reactor.core.publisher.Mono;
import reactor.core.publisher.MonoSink;

@Component
public class Manifest {

    public final String id = "obenbpt-template-service-java";
    public final String name = "Template Service (Java)";
    public final String version = "1.0.0";
    public final String description = "A template service for development purposes.";
    public String url = ""; // set in onApplicationReady
    public final int ttl = 1000 * 60 * 60; // milliseconds
    public final PayloadInput[] input = (new PayloadInput[]{
        new PayloadInput.BOOLEAN("Bool", "ibool", "Substract instead of add 1 to Number"),
        new PayloadInput.NUMBER("Number", "inum", "The number to add or substract from"),
        new PayloadInput.STRING("String input", "istr", "This string will be stripped of the selected letter"),
        new PayloadInput.ENUM("Select one", "ienum", "This letter will be stripped of the string", new String[]{"A", "E", "I", "O", "U"}),
        new PayloadInput.CURRENT_MODEL("Model", "imodel", "This model will just be mirrored back", ModelType.BPMN_PROCESS),});
    public final PayloadOutput[] output = (new PayloadOutput[]{
        new PayloadOutput.NUMBER("The modified number", "onum", ""),
        new PayloadOutput.STRING("The stripped down string", "ostr", ""),
        new PayloadOutput.MODEL("Model", "omodel", "this will not be saved", ModelType.BPMN_PROCESS, false),});

    @EventListener(ApplicationReadyEvent.class)
    public void onApplicationReady(ApplicationReadyEvent event) {
        Environment environment = event.getApplicationContext().getEnvironment();
        this.url = String.format("http://localhost:%s", environment.getProperty("local.server.port"));
        monoSink.success(this);
    }

    private MonoSink<Manifest> monoSink;
    private Mono<Manifest> _ready = Mono.create(sink -> {
        monoSink = sink;
    });

    public Mono<Manifest> ready() {
        return _ready;
    }
}
