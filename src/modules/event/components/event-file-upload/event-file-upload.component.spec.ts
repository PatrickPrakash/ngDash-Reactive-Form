import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFileUploadComponent } from './event-file-upload.component';

describe('EventFileUploadComponent', () => {
  let component: EventFileUploadComponent;
  let fixture: ComponentFixture<EventFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventFileUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
