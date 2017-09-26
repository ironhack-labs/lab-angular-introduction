/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlogArticleComponent } from './blog-article.component';

describe('BlogArticleComponent', () => {
  let component: BlogArticleComponent;
  let fixture: ComponentFixture<BlogArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
