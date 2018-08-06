import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsComponentComponent } from './champions-component.component';

describe('ChampionsComponentComponent', () => {
  let component: ChampionsComponentComponent;
  let fixture: ComponentFixture<ChampionsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
