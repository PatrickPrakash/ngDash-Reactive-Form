import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventcardComponent } from './components/eventcard/eventcard.component';
import { EventTitleDescComponent } from './components/event-title-desc/event-title-desc.component';
import { EventDescriptionComponent } from './components/event-description/event-description.component';
import { EventDateTimeComponent } from './components/event-date-time/event-date-time.component';
import { SharedModule } from 'src/Shared/shared.module';
import { EventLocationMeetingComponent } from './components/event-location-meeting/event-location-meeting.component';
import { EventMeetingRoomComponent } from './components/event-meeting-room/event-meeting-room.component';
import { EventGuestViewAddComponent } from './components/event-guest-view-add/event-guest-view-add.component';
import { EventFileUploadComponent } from './components/event-file-upload/event-file-upload.component';
@NgModule({
  declarations: [
    EventcardComponent,
    EventTitleDescComponent,
    EventDescriptionComponent,
    EventDateTimeComponent,
    EventLocationMeetingComponent,
    EventMeetingRoomComponent,
    EventGuestViewAddComponent,
    EventFileUploadComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [EventcardComponent],
})
export class EventModule {}
