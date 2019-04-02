import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsDisplayerComponent } from './comments-displayer.component';

describe('CommentsDisplayerComponent', () => {
  let component: CommentsDisplayerComponent;
  let fixture: ComponentFixture<CommentsDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
