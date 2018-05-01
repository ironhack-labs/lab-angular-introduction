import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamComponentComponent } from './team-component.component';

describe('TeamComponentComponent', () => {
  let component: TeamComponentComponent;
  let fixture: ComponentFixture<TeamComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
