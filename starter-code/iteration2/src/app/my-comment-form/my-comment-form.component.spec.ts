import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCommentFormComponent } from './my-comment-form.component';

describe('MyCommentFormComponent', () => {
  let component: MyCommentFormComponent;
  let fixture: ComponentFixture<MyCommentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCommentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
