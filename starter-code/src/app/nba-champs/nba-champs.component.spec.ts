/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NbaChampsComponent } from './nba-champs.component';

describe('NbaChampsComponent', () => {
  let component: NbaChampsComponent;
  let fixture: ComponentFixture<NbaChampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaChampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaChampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
