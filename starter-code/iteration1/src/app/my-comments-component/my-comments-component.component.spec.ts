import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCommentsComponentComponent } from './my-comments-component.component';

describe('MyCommentsComponentComponent', () => {
  let component: MyCommentsComponentComponent;
  let fixture: ComponentFixture<MyCommentsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCommentsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCommentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
