/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PonyoComponent } from './ponyo.component';

describe('PonyoComponent', () => {
  let component: PonyoComponent;
  let fixture: ComponentFixture<PonyoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonyoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PonyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
