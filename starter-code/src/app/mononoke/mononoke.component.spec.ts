/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MononokeComponent } from './mononoke.component';

describe('MononokeComponent', () => {
  let component: MononokeComponent;
  let fixture: ComponentFixture<MononokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MononokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MononokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
