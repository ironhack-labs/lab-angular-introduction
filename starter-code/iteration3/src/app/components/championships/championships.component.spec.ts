import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipsComponent } from './championships.component';

describe('ChampionshipsComponent', () => {
  let component: ChampionshipsComponent;
  let fixture: ComponentFixture<ChampionshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
