import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCOmponentComponent } from './main-component.component';

describe('MainCOmponentComponent', () => {
  let component: MainCOmponentComponent;
  let fixture: ComponentFixture<MainCOmponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCOmponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCOmponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
