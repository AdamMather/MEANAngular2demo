import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

// Routes
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { BaseNavComponent } from './core/base-nav/base-nav.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

// Services
import { UserService } from './shared/service/user.service';

// Resolve Guards
import { UserResolve } from './shared/resolve/user-resolve.service';

// Error Handling
import { GlobalErrorHandler } from './shared/errorHandling/globalErrorHandler';
import { ErrorHandlingHttp } from './shared/errorHandling/errorHandlingHttp.service';

// Import HammerJS for Angular Material
import 'hammerjs';

import { APP_BASE_HREF } from '@angular/common';

// Routers
@NgModule({
  declarations: [
    AppComponent,
    BaseNavComponent,
    Page1Component,
    Page2Component
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    UserResolve,
    {provide: APP_BASE_HREF, useValue : '/' },
    {provide: Http, useClass: ErrorHandlingHttp },
    {provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
