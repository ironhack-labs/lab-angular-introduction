import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPostComponent } from './my-post.component';

describe('MyPostComponent', () => {
  let component: MyPostComponent;
  let fixture: ComponentFixture<MyPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
