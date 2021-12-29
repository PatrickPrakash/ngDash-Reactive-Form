import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventcardComponent } from './components/eventcard/eventcard.component';
import { EventTitleDescComponent } from './components/event-title-desc/event-title-desc.component';
import { EventDescriptionComponent } from './components/event-description/event-description.component';
import { EventDateTimeComponent } from './components/event-date-time/event-date-time.component';
import { EventDatePickerComponent } from './components/event-date-picker/event-date-picker.component';
import { EventTimePickerComponent } from './components/event-time-picker/event-time-picker.component';
import { EventTimeDurationPickerComponent } from './components/event-time-duration-picker/event-time-duration-picker.component';

@NgModule({
  declarations: [EventcardComponent, EventTitleDescComponent, EventDescriptionComponent, EventDateTimeComponent, EventDatePickerComponent, EventTimePickerComponent, EventTimeDurationPickerComponent],
  imports: [CommonModule],
  exports: [EventcardComponent],
})
export class EventModule {}
