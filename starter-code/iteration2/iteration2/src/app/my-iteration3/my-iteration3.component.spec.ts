import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIteration3Component } from './my-iteration3.component';

describe('MyIteration3Component', () => {
  let component: MyIteration3Component;
  let fixture: ComponentFixture<MyIteration3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyIteration3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIteration3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
