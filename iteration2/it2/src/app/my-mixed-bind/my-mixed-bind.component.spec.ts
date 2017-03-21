import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMixedBindComponent } from './my-mixed-bind.component';

describe('MyMixedBindComponent', () => {
  let component: MyMixedBindComponent;
  let fixture: ComponentFixture<MyMixedBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMixedBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMixedBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
