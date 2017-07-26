import { Http } from '@angular/http';
import { Injectable, Injector, ErrorHandler, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Error } from '../../core/error.model';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {

    private router: Router;

    constructor(inject: Injector) {
        super();

        // Having to do it this way to avoid cyclic dependencies with the ErrorHandler specifically
        this.router = inject.get(Router);
    }

    handleError(error) {

        // Incase its the ZoneAwareError; get the original error
        if (error.hasOwnProperty('rejection')) {
            error = error.rejection;
        }

        if (error instanceof Error) {
            // Here we can manually handle any server errors we want
            if (error.code === 1) {
                console.log('Handling error code: 1 manually');
            }

        } else {
            super.handleError(error);
        }
    }
}