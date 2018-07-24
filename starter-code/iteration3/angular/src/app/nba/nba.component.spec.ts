import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NBAComponent } from './nba.component';

describe('NBAComponent', () => {
  let component: NBAComponent;
  let fixture: ComponentFixture<NBAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NBAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
