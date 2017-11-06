import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGameComponentComponent } from './my-game-component.component';

describe('MyGameComponentComponent', () => {
  let component: MyGameComponentComponent;
  let fixture: ComponentFixture<MyGameComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGameComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
