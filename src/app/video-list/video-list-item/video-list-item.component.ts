import {Component, Input, OnInit} from '@angular/core';
import {VideoListItem} from '../../models/video-list-item';

@Component({
  selector: 'app-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.css']
})
export class VideoListItemComponent implements OnInit {

  @Input() content: VideoListItem;

  constructor() { }

  ngOnInit() {
    console.log(this.content);
  }

}
