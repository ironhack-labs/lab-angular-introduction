import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaBoxComponent } from './nba-box.component';

describe('NbaBoxComponent', () => {
  let component: NbaBoxComponent;
  let fixture: ComponentFixture<NbaBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
