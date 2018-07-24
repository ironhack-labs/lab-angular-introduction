import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallersComponent } from './ballers.component';

describe('BallersComponent', () => {
  let component: BallersComponent;
  let fixture: ComponentFixture<BallersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
