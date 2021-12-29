import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTimeDurationPickerComponent } from './event-time-duration-picker.component';

describe('EventTimeDurationPickerComponent', () => {
  let component: EventTimeDurationPickerComponent;
  let fixture: ComponentFixture<EventTimeDurationPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTimeDurationPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTimeDurationPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
