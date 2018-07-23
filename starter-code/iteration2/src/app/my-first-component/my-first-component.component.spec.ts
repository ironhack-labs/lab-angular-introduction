import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstComponentComponent } from './my-first-component.component';

describe('MyFirstComponentComponent', () => {
  let component: MyFirstComponentComponent;
  let fixture: ComponentFixture<MyFirstComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
