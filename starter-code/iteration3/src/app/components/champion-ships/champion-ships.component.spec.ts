import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionShipsComponent } from './champion-ships.component';

describe('ChampionShipsComponent', () => {
  let component: ChampionShipsComponent;
  let fixture: ComponentFixture<ChampionShipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionShipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
