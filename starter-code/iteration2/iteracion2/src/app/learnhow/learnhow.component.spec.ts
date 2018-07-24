import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnhowComponent } from './learnhow.component';

describe('LearnhowComponent', () => {
  let component: LearnhowComponent;
  let fixture: ComponentFixture<LearnhowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnhowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnhowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
