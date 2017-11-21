import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEventBindingComponent } from './my-event-binding.component';

describe('MyEventBindingComponent', () => {
  let component: MyEventBindingComponent;
  let fixture: ComponentFixture<MyEventBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEventBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
