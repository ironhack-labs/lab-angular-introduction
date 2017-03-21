import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEventBindComponent } from './my-event-bind.component';

describe('MyEventBindComponent', () => {
  let component: MyEventBindComponent;
  let fixture: ComponentFixture<MyEventBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEventBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEventBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
