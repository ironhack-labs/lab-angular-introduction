/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyNestedComponent } from './my-nested.component';

describe('MyNestedComponent', () => {
  let component: MyNestedComponent;
  let fixture: ComponentFixture<MyNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
