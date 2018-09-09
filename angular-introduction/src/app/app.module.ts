import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoAlbumComponent } from './components/photo.album/photo.album.component';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoAlbumComponent,
    PhotoDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
