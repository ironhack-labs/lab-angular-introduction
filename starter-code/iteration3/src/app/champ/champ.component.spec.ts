import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampComponent } from './champ.component';

describe('ChampComponent', () => {
  let component: ChampComponent;
  let fixture: ComponentFixture<ChampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
