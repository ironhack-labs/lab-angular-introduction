/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Iti1Component } from './iti1.component';

describe('Iti1Component', () => {
  let component: Iti1Component;
  let fixture: ComponentFixture<Iti1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iti1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iti1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
