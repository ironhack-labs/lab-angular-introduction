import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheArticleComponent } from './the-article.component';

describe('TheArticleComponent', () => {
  let component: TheArticleComponent;
  let fixture: ComponentFixture<TheArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
