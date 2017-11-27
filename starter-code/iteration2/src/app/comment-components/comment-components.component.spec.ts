import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentComponentsComponent } from './comment-components.component';

describe('CommentComponentsComponent', () => {
  let component: CommentComponentsComponent;
  let fixture: ComponentFixture<CommentComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
