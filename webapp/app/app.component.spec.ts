/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BaseNavComponent } from './core/base-nav/base-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BaseNavComponent,
        Page1Component,
        Page2Component
      ],
      imports: [
        AppRoutingModule,
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
