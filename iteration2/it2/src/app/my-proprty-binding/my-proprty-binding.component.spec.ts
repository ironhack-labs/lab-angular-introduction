import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProprtyBindingComponent } from './my-proprty-binding.component';

describe('MyProprtyBindingComponent', () => {
  let component: MyProprtyBindingComponent;
  let fixture: ComponentFixture<MyProprtyBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProprtyBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProprtyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
