import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommetsComponent } from './commets.component';

describe('CommetsComponent', () => {
  let component: CommetsComponent;
  let fixture: ComponentFixture<CommetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
