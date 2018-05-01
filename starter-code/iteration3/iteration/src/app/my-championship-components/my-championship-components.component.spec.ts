import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChampionshipComponentsComponent } from './my-championship-components.component';

describe('MyChampionshipComponentsComponent', () => {
  let component: MyChampionshipComponentsComponent;
  let fixture: ComponentFixture<MyChampionshipComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChampionshipComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChampionshipComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
