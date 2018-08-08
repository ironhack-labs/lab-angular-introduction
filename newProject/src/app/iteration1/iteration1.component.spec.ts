import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iteration1Component } from './iteration1.component';

describe('Iteration1Component', () => {
  let component: Iteration1Component;
  let fixture: ComponentFixture<Iteration1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iteration1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iteration1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
