import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaChampionsComponent } from './nba-champions.component';

describe('NbaChampionsComponent', () => {
  let component: NbaChampionsComponent;
  let fixture: ComponentFixture<NbaChampionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaChampionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
