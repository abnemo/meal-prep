import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekPrepComponent } from './weekprep.component';

describe('WeekprepComponent', () => {
  let component: WeekPrepComponent;
  let fixture: ComponentFixture<WeekPrepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeekPrepComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekPrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
