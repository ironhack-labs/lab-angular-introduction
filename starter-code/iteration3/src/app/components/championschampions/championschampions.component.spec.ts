import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionschampionsComponent } from './championschampions.component';

describe('ChampionschampionsComponent', () => {
  let component: ChampionschampionsComponent;
  let fixture: ComponentFixture<ChampionschampionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionschampionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionschampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
