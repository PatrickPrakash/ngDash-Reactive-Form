import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLocationMeetingComponent } from './event-location-meeting.component';

describe('EventLocationMeetingComponent', () => {
  let component: EventLocationMeetingComponent;
  let fixture: ComponentFixture<EventLocationMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventLocationMeetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLocationMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
