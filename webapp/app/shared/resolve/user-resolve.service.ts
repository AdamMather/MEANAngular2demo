import { UserService } from './../service/user.service';
import { User } from './../../core/user.model';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable, ErrorHandler } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserResolve implements Resolve<Array<User>> {

    constructor(
        private errorHandler: ErrorHandler,
        private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.userService.getUser().catch(e => {

            //note: if we leave the error unchecked, it get's blocked somewhere in a zone.js Promise.
            //this feels like an Angular2 bug; this is just a work-around for the time being.
            this.errorHandler.handleError(e);
            return Observable.empty();
        });
    }

}
