import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEquipoComponent } from './component-equipo.component';

describe('ComponentEquipoComponent', () => {
  let component: ComponentEquipoComponent;
  let fixture: ComponentFixture<ComponentEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
