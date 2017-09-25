/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TotoroComponent } from './totoro.component';

describe('TotoroComponent', () => {
  let component: TotoroComponent;
  let fixture: ComponentFixture<TotoroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotoroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
