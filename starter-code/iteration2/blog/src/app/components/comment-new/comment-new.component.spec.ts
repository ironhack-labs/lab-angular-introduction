import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentNewComponent } from './comment-new.component';

describe('CommentNewComponent', () => {
  let component: CommentNewComponent;
  let fixture: ComponentFixture<CommentNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
