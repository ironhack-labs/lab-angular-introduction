/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Iteration2MainComponent } from './iteration-2-main.component';

describe('Iteration2MainComponent', () => {
  let component: Iteration2MainComponent;
  let fixture: ComponentFixture<Iteration2MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iteration2MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iteration2MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
