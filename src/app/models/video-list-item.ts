import {Thumbnail} from './thumbnail';

export class VideoListItem {
  title: string;
  description: string;
  thumbnails: {
    thumbnail: Thumbnail[]
  };
}
