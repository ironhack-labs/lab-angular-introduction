import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTwoWayBindComponent } from './my-two-way-bind.component';

describe('MyTwoWayBindComponent', () => {
  let component: MyTwoWayBindComponent;
  let fixture: ComponentFixture<MyTwoWayBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTwoWayBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTwoWayBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
