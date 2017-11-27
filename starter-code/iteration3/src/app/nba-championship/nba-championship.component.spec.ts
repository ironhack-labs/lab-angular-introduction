import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaChampionshipComponent } from './nba-championship.component';

describe('NbaChampionshipComponent', () => {
  let component: NbaChampionshipComponent;
  let fixture: ComponentFixture<NbaChampionshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaChampionshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaChampionshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
