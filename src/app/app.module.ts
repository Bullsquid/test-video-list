import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoListItemComponent } from './video-list/video-list-item/video-list-item.component';
import { ApiService } from './api.service';
import { VideoPlayerComponent } from './video-player/video-player.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoListItemComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
