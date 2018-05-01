import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbachampionsComponentComponent } from './nbachampions-component.component';

describe('NbachampionsComponentComponent', () => {
  let component: NbachampionsComponentComponent;
  let fixture: ComponentFixture<NbachampionsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbachampionsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbachampionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
