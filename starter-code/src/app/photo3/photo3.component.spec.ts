/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Photo3Component } from './photo3.component';

describe('Photo3Component', () => {
  let component: Photo3Component;
  let fixture: ComponentFixture<Photo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Photo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Photo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
