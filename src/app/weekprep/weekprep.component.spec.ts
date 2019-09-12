import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekprepComponent } from './weekprep.component';

describe('WeekprepComponent', () => {
  let component: WeekprepComponent;
  let fixture: ComponentFixture<WeekprepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekprepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekprepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
