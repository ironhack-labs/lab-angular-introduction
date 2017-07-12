/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Photo2Component } from './photo2.component';

describe('Photo2Component', () => {
  let component: Photo2Component;
  let fixture: ComponentFixture<Photo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Photo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Photo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
