import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iteration2CommentsComponent } from './iteration2-comments.component';

describe('Iteration2CommentsComponent', () => {
  let component: Iteration2CommentsComponent;
  let fixture: ComponentFixture<Iteration2CommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iteration2CommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iteration2CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
