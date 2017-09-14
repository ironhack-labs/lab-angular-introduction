import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { ImagesAlbumComponent } from './images-album/images-album.component';
import { AcordionComponent } from './acordion/acordion.component';
import { MainComponent } from './main/main.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ImagesAlbumComponent,
    AcordionComponent,
    MainComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
