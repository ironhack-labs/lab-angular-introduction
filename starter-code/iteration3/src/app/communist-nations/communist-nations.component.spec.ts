import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunistNationsComponent } from './communist-nations.component';

describe('CommunistNationsComponent', () => {
  let component: CommunistNationsComponent;
  let fixture: ComponentFixture<CommunistNationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunistNationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunistNationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
