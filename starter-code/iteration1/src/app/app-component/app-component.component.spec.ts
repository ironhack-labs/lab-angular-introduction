import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponentComponent } from './app-component.component';

describe('AppComponentComponent', () => {
  let component: AppComponentComponent;
  let fixture: ComponentFixture<AppComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
