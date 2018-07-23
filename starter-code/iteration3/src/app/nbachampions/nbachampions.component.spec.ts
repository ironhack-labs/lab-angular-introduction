import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NBAchampionsComponent } from './nbachampions.component';

describe('NBAchampionsComponent', () => {
  let component: NBAchampionsComponent;
  let fixture: ComponentFixture<NBAchampionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NBAchampionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NBAchampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
