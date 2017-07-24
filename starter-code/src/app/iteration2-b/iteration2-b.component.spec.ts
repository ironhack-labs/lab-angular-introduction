/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Iteration2BComponent } from './iteration2-b.component';

describe('Iteration2BComponent', () => {
  let component: Iteration2BComponent;
  let fixture: ComponentFixture<Iteration2BComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iteration2BComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iteration2BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
