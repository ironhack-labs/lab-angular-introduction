import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { MainComponent } from './main/main.component';
import { CommentComponent } from './comment/comment.component';
import { ChampionshipComponent } from './championship/championship.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    PhotoGalleryComponent,
    MainComponent,
    CommentComponent,
    ChampionshipComponent
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
