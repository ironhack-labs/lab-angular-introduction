/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { It2Component } from './it2.component';

describe('It2Component', () => {
  let component: It2Component;
  let fixture: ComponentFixture<It2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ It2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(It2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
