import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheInputFormComponent } from './the-input-form.component';

describe('TheInputFormComponent', () => {
  let component: TheInputFormComponent;
  let fixture: ComponentFixture<TheInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
