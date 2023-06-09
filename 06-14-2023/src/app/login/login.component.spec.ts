/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { loginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: loginComponent;
  let fixture: ComponentFixture<loginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ loginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(loginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
