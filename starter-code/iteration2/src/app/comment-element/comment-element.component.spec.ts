import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentElementComponent } from './comment-element.component';

describe('CommentElementComponent', () => {
  let component: CommentElementComponent;
  let fixture: ComponentFixture<CommentElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
