import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListComponent } from './video-list.component';

describe('VideoListComponent', () => {
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "loading" while list is not ready');

  it('should not display "loading" when list ready');

  it('should display "no items found" when there are no items');

  it('should display video-list-items when videoList is not empty');

  it('should show video player when clicked on video row');

  it('should hide video player when video player emits "closed" event');
});
