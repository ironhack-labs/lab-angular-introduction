/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Iti2Component } from './iti2.component';

describe('Iti2Component', () => {
  let component: Iti2Component;
  let fixture: ComponentFixture<Iti2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iti2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iti2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
