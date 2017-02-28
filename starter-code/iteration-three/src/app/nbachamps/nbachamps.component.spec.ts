import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbachampsComponent } from './nbachamps.component';

describe('NbachampsComponent', () => {
  let component: NbachampsComponent;
  let fixture: ComponentFixture<NbachampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbachampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbachampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
