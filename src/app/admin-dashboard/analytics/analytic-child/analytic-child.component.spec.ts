import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticChildComponent } from './analytic-child.component';

describe('AnalyticChildComponent', () => {
  let component: AnalyticChildComponent;
  let fixture: ComponentFixture<AnalyticChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
