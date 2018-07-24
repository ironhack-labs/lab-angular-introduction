import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoentariosComponent } from './coentarios.component';

describe('CoentariosComponent', () => {
  let component: CoentariosComponent;
  let fixture: ComponentFixture<CoentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
