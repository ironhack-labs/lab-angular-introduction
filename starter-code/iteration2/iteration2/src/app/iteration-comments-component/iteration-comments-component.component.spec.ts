import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IterationCommentsComponentComponent } from './iteration-comments-component.component';

describe('IterationCommentsComponentComponent', () => {
  let component: IterationCommentsComponentComponent;
  let fixture: ComponentFixture<IterationCommentsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IterationCommentsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IterationCommentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
