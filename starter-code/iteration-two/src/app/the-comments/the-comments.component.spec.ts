import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCommentsComponent } from './the-comments.component';

describe('TheCommentsComponent', () => {
  let component: TheCommentsComponent;
  let fixture: ComponentFixture<TheCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
