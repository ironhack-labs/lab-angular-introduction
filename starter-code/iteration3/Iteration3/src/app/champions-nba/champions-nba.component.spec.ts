import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsNbaComponent } from './champions-nba.component';

describe('ChampionsNbaComponent', () => {
  let component: ChampionsNbaComponent;
  let fixture: ComponentFixture<ChampionsNbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionsNbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsNbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
