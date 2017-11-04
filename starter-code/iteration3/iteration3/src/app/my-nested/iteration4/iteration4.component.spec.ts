import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iteration4Component } from './iteration4.component';

describe('Iteration4Component', () => {
  let component: Iteration4Component;
  let fixture: ComponentFixture<Iteration4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iteration4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iteration4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
