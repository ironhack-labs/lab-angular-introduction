import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Argicle01Component } from './argicle01.component';

describe('Argicle01Component', () => {
  let component: Argicle01Component;
  let fixture: ComponentFixture<Argicle01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Argicle01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Argicle01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
