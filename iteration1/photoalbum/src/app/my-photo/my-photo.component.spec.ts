import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPhotoComponent } from './my-photo.component';

describe('MyPhotoComponent', () => {
  let component: MyPhotoComponent;
  let fixture: ComponentFixture<MyPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
