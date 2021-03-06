import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { VideoListItem } from '../models/video-list-item';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  public videoList: VideoListItem[];
  public selectedVideo: VideoListItem = null;
  public loading = true;
  public loaded = false;
  public error = false;


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getVideoList().subscribe(data => {
      if (data && data['video'] instanceof Array) {
        this.videoList = data['video'];
        this.loading = false;
        this.loaded = true;
      }
    }, err => {
      console.log('Error while loading video list: ', err);
      this.loading = false;
      this.error = true;
    });
  }

  playVideo(content) {
    console.log('playing ', content);
    this.selectedVideo = content;
  }

  closeVideoPlayer() {
    this.selectedVideo = null;
  }

}
