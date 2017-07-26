/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppRoutingModule } from '../../app-routing.module';
import { Page1Component } from '../../page1/page1.component';
import { Page2Component } from '../../page2/page2.component';

import { BaseNavComponent } from './base-nav.component';

import { APP_BASE_HREF } from '@angular/common';

describe('BaseNavComponent', () => {
  let component: BaseNavComponent;
  let fixture: ComponentFixture<BaseNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BaseNavComponent,
        Page1Component,
        Page2Component
      ],
      imports: [
        AppRoutingModule,
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
