import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeEmBoyComponent } from './pipe-em-boy.component';

describe('PipeEmBoyComponent', () => {
  let component: PipeEmBoyComponent;
  let fixture: ComponentFixture<PipeEmBoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeEmBoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeEmBoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
