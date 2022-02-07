import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMeetingRoomComponent } from './event-meeting-room.component';

describe('EventMeetingRoomComponent', () => {
  let component: EventMeetingRoomComponent;
  let fixture: ComponentFixture<EventMeetingRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventMeetingRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMeetingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
