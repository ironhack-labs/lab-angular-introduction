import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMixedBindingComponent } from './my-mixed-binding.component';

describe('MyMixedBindingComponent', () => {
  let component: MyMixedBindingComponent;
  let fixture: ComponentFixture<MyMixedBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMixedBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMixedBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
