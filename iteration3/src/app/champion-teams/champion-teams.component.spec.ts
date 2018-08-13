import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionTeamsComponent } from './champion-teams.component';

describe('ChampionTeamsComponent', () => {
  let component: ChampionTeamsComponent;
  let fixture: ComponentFixture<ChampionTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
