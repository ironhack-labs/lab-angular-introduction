import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIteration2Component } from './my-iteration2.component';

describe('MyIteration2Component', () => {
  let component: MyIteration2Component;
  let fixture: ComponentFixture<MyIteration2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyIteration2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIteration2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
