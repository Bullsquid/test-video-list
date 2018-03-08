import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {VideoListItem} from '../models/video-list-item';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  public videoList: VideoListItem[];
  public loaded = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getVideoList().subscribe(data => {
      if (data && data['video'] instanceof Array) {
        this.videoList = data['video'];
        this.loaded = true;
      }
    });
  }

}
