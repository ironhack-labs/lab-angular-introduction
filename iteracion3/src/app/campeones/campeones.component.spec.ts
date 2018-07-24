import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonesComponent } from './campeones.component';

describe('CampeonesComponent', () => {
  let component: CampeonesComponent;
  let fixture: ComponentFixture<CampeonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampeonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampeonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
