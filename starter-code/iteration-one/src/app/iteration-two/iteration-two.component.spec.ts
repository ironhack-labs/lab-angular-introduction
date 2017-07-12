import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IterationTwoComponent } from './iteration-two.component';

describe('IterationTwoComponent', () => {
  let component: IterationTwoComponent;
  let fixture: ComponentFixture<IterationTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IterationTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IterationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
