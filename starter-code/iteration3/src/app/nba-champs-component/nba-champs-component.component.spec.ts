import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaChampsComponentComponent } from './nba-champs-component.component';

describe('NbaChampsComponentComponent', () => {
  let component: NbaChampsComponentComponent;
  let fixture: ComponentFixture<NbaChampsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaChampsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaChampsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
