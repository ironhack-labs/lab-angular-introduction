import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChampionsComponent } from './my-champions.component';

describe('MyChampionsComponent', () => {
  let component: MyChampionsComponent;
  let fixture: ComponentFixture<MyChampionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChampionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
