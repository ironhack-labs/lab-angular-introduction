import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoArticleComponent } from './photo-article.component';

describe('PhotoArticleComponent', () => {
  let component: PhotoArticleComponent;
  let fixture: ComponentFixture<PhotoArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
