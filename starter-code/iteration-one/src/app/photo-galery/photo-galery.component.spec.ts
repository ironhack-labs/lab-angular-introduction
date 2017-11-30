import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGaleryComponent } from './photo-galery.component';

describe('PhotoGaleryComponent', () => {
  let component: PhotoGaleryComponent;
  let fixture: ComponentFixture<PhotoGaleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoGaleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
