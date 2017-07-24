/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Iteration2Component } from './iteration2.component';

describe('Iteration2Component', () => {
  let component: Iteration2Component;
  let fixture: ComponentFixture<Iteration2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iteration2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iteration2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
