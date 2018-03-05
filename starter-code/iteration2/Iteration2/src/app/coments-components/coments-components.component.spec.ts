import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentsComponentsComponent } from './coments-components.component';

describe('ComentsComponentsComponent', () => {
  let component: ComentsComponentsComponent;
  let fixture: ComponentFixture<ComentsComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentsComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
