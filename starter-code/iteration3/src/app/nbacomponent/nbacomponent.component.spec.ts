import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NBAComponentComponent } from './nbacomponent.component';

describe('NBAComponentComponent', () => {
  let component: NBAComponentComponent;
  let fixture: ComponentFixture<NBAComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NBAComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NBAComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
