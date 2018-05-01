import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPlayersComponent } from './best-players.component';

describe('BestPlayersComponent', () => {
  let component: BestPlayersComponent;
  let fixture: ComponentFixture<BestPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
