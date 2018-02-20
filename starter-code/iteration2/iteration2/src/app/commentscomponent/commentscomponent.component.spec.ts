import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentscomponentComponent } from './commentscomponent.component';

describe('CommentscomponentComponent', () => {
  let component: CommentscomponentComponent;
  let fixture: ComponentFixture<CommentscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
