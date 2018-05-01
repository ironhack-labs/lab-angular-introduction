import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangingComponentComponent } from './changing-component.component';

describe('ChangingComponentComponent', () => {
  let component: ChangingComponentComponent;
  let fixture: ComponentFixture<ChangingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
