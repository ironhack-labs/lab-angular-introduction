import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iteration2bComponent } from './iteration-2b.component';

describe('Iteration2bComponent', () => {
  let component: Iteration2bComponent;
  let fixture: ComponentFixture<Iteration2bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iteration2bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iteration2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
