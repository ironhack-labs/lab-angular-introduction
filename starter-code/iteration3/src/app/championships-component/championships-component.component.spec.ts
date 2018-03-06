import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipsComponentComponent } from './championships-component.component';

describe('ChampionshipsComponentComponent', () => {
  let component: ChampionshipsComponentComponent;
  let fixture: ComponentFixture<ChampionshipsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionshipsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
