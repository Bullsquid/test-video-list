import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VideoListItem} from '../models/video-list-item';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @Input() content: VideoListItem;
  @Output() closed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  closeVideo() {
    this.closed.emit(true);
  }

}
