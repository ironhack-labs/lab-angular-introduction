/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Imag1Component } from './imag1.component';

describe('Imag1Component', () => {
  let component: Imag1Component;
  let fixture: ComponentFixture<Imag1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imag1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imag1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
