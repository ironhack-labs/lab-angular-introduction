/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Photo1Component } from './photo1.component';

describe('Photo1Component', () => {
  let component: Photo1Component;
  let fixture: ComponentFixture<Photo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Photo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Photo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
