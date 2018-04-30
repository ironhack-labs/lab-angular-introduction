import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentsComponentComponent } from './coments-component.component';

describe('ComentsComponentComponent', () => {
  let component: ComentsComponentComponent;
  let fixture: ComponentFixture<ComentsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
