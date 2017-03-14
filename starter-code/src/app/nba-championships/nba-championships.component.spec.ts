/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NbaChampionshipsComponent } from './nba-championships.component';

describe('NbaChampionshipsComponent', () => {
  let component: NbaChampionshipsComponent;
  let fixture: ComponentFixture<NbaChampionshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaChampionshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaChampionshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
