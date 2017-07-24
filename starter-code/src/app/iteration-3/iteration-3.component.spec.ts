import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iteration3Component } from './iteration-3.component';

describe('Iteration3Component', () => {
  let component: Iteration3Component;
  let fixture: ComponentFixture<Iteration3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iteration3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iteration3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
