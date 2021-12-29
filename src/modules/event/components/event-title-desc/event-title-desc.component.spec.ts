import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTitleDescComponent } from './event-title-desc.component';

describe('EventTitleDescComponent', () => {
  let component: EventTitleDescComponent;
  let fixture: ComponentFixture<EventTitleDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTitleDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTitleDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
