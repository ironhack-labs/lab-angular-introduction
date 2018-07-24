import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LCSComponent } from './lcs.component';

describe('LCSComponent', () => {
  let component: LCSComponent;
  let fixture: ComponentFixture<LCSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LCSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LCSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
