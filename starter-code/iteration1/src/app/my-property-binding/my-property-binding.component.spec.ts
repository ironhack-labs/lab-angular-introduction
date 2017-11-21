import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPropertyBindingComponent } from './my-property-binding.component';

describe('MyPropertyBindingComponent', () => {
  let component: MyPropertyBindingComponent;
  let fixture: ComponentFixture<MyPropertyBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPropertyBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
