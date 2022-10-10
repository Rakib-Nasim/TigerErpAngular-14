import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherEntryComponent } from './publisher-entry.component';

describe('PublisherEntryComponent', () => {
  let component: PublisherEntryComponent;
  let fixture: ComponentFixture<PublisherEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
