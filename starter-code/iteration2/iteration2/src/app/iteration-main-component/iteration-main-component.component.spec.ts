import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IterationMainComponentComponent } from './iteration-main-component.component';

describe('IterationMainComponentComponent', () => {
  let component: IterationMainComponentComponent;
  let fixture: ComponentFixture<IterationMainComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IterationMainComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IterationMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
