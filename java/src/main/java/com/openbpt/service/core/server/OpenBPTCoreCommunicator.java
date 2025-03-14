package com.openbpt.service.core.server;

import java.time.Duration;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import com.openbpt.service.Manifest;

import jakarta.annotation.PostConstruct;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Component
public class OpenBPTCoreCommunicator {

    private final String backendUrl = "http://localhost:4000";
    private final String backendApiKey = "dev";

    private final Manifest manifest;
    private final WebClient coreBackend;

    OpenBPTCoreCommunicator(Manifest manifest) {
        this.manifest = manifest;
        this.coreBackend = WebClient.builder().baseUrl(backendUrl).build();
    }

    @PostConstruct
    public void postConstruct() {
        this.manifest.ready()
                .flatMap(readySignal -> this.register())
                .doOnNext(registration -> System.out.println("Successfully registered"))
                .doOnError(error -> System.err.println("Failed to register\n" + error.toString()))
                .flux()
                .flatMap(intervalTrigger -> Flux.interval(Duration.ofMillis(manifest.ttl - 5 * 1000)))
                .flatMap(interval -> this.sendHeartbeat(manifest.id))
                .subscribe();
    }

    Mono<ServiceStatusResponse> register() {
        var registrationRequest = new RegistrationRequest(manifest);

        return coreBackend.post()
                .uri("/service-manager/services/register")
                .contentType(MediaType.APPLICATION_JSON)
                .header("x-backend-api-key", backendApiKey)
                .bodyValue(registrationRequest)
                .retrieve()
                .bodyToMono(ServiceStatusResponse.class);
    }

    Mono<ServiceStatusResponse> sendHeartbeat(String serviceId) {
        return coreBackend.post()
                .uri(String.format("/service-manager/services/%s/heartbeat", serviceId))
                .retrieve()
                .bodyToMono(ServiceStatusResponse.class);
    }

    static class RegistrationRequest {

        public Manifest manifest;

        public RegistrationRequest(Manifest manifest) {
            this.manifest = manifest;
        }
    }

    static class ServiceStatusResponse {

        public boolean success;
    }
}
