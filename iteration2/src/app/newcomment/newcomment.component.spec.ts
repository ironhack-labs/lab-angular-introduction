import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcommentComponent } from './newcomment.component';

describe('NewcommentComponent', () => {
  let component: NewcommentComponent;
  let fixture: ComponentFixture<NewcommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
