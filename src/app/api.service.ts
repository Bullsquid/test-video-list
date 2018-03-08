import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  private videoListUrl =
    'https://api.contents.watchabc.go.com/vp2/ws/s/contents/3000/videos/001/001/sf/-1/-1/-1/-1/10.json';

  constructor(private http: HttpClient) { }

  getVideoList() {
    return this.http.get(this.videoListUrl);
  }

}
