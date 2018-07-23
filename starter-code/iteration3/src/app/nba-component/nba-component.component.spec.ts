import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaComponentComponent } from './nba-component.component';

describe('NbaComponentComponent', () => {
  let component: NbaComponentComponent;
  let fixture: ComponentFixture<NbaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
