import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommmentsComponentComponent } from './commments-component.component';

describe('CommmentsComponentComponent', () => {
  let component: CommmentsComponentComponent;
  let fixture: ComponentFixture<CommmentsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommmentsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommmentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
