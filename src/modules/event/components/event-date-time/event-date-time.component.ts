import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-date-time',
  templateUrl: './event-date-time.component.html',
  styleUrls: ['./event-date-time.component.scss'],
})
export class EventDateTimeComponent implements OnInit {
  date:any = 'January 1, 2022'
  startTime:any = '12:00 AM'
  endTime:any = '12:30 PM'

  constructor() {}

  ngOnInit(): void {}
}
