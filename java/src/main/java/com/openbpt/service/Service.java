package com.openbpt.service;

import java.util.regex.Pattern;

import com.openbpt.service.core.server.ServiceController.ProcessRequest;
import com.openbpt.service.core.server.ServiceController.ProcessResponse;

public class Service {

    public static ProcessResponse run(ProcessRequest request) {
        ProcessResponse response = new ProcessResponse();
        response.onum = request.inum + (request.ibool ? -1 : 1);
        response.ostr = request.istr.replaceAll("(?i)" + Pattern.quote(request.ienum), "");
        response.omodel = request.imodel;
        response.osimres = request.isimres;
        return response;
    }
}
