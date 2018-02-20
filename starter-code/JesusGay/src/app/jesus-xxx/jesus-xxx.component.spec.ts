import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JesusXxxComponent } from './jesus-xxx.component';

describe('JesusXxxComponent', () => {
  let component: JesusXxxComponent;
  let fixture: ComponentFixture<JesusXxxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JesusXxxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JesusXxxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
