import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentComponentComponent } from './comment-component.component';

describe('CommentComponentComponent', () => {
  let component: CommentComponentComponent;
  let fixture: ComponentFixture<CommentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
