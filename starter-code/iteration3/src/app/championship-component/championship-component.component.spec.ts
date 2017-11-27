import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipComponentComponent } from './championship-component.component';

describe('ChampionshipComponentComponent', () => {
  let component: ChampionshipComponentComponent;
  let fixture: ComponentFixture<ChampionshipComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionshipComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
