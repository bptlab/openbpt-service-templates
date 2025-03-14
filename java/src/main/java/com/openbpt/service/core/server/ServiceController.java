package com.openbpt.service.core.server;

import java.util.Collections;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.openbpt.service.Service;

@RestController
@RequestMapping("/")
public class ServiceController {

    @GetMapping("/healthcheck")
    public ResponseEntity<Map<Object, Object>> healthcheck() {
        System.out.println("received healthcheck request");
        return ResponseEntity.ok(Collections.emptyMap()); // return empty map as the reponse still needs to be json even though the content does not matter
    }

    @PostMapping("/run")
    public ResponseEntity<ProcessResponse> processRequest(@RequestBody ProcessRequest request) {
        ProcessResponse response = Service.run(request);
        return ResponseEntity.ok(response);
    }

    public static class ProcessRequest {

        public boolean ibool;
        public int inum;
        public String istr;
        public String ienum;
        public String imodel;
        public String isimres;
    }

    public static class ProcessResponse {

        public int onum;
        public String ostr;
        public String omodel;
        public String osimres;
    }

}
