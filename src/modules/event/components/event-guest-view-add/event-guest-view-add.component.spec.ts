import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventGuestViewAddComponent } from './event-guest-view-add.component';

describe('EventGuestViewAddComponent', () => {
  let component: EventGuestViewAddComponent;
  let fixture: ComponentFixture<EventGuestViewAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventGuestViewAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventGuestViewAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
