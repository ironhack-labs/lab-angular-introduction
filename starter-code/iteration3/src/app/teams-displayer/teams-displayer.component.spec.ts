import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsDisplayerComponent } from './teams-displayer.component';

describe('TeamsDisplayerComponent', () => {
  let component: TeamsDisplayerComponent;
  let fixture: ComponentFixture<TeamsDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
