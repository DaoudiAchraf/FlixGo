import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticChildCategComponent } from './analytic-child-categ.component';

describe('AnalyticChildCategComponent', () => {
  let component: AnalyticChildCategComponent;
  let fixture: ComponentFixture<AnalyticChildCategComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticChildCategComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticChildCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
