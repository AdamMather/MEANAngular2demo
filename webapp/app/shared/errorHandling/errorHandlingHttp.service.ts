import { Injectable } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Error } from '../../core/error.model';

@Injectable()
export class ErrorHandlingHttp extends Http {

    constructor(backend: XHRBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options).catch((error: Response) => {

            let retVal: any = error;

            // If the error is a JSON error model from the server, convert it into a model
            // else if it's a 401 Unauthorized error, convert it into a model
            // else we return the response to handle by the default approach
            if (Error.isResponseErrorModel(error)) {
                retVal = new Error(error.json(), error.status);
            } else if (error.status === 401) {
                retVal = new Error({code: -1, msg: 'Unauthorized'}, error.status);
            } else if (error.status === 500) {
                retVal = new Error({code: -1, msg: 'Unexpected server error'}, error.status);
            }

            throw retVal;
        });
    }
}