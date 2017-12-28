import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaItemComponent } from './nba-item.component';

describe('NbaItemComponent', () => {
  let component: NbaItemComponent;
  let fixture: ComponentFixture<NbaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
