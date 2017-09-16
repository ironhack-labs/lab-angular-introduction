import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { MainComponent } from './main/main.component';
import { ArticleComponent } from './article/article.component';
import { CommentsComponent } from './comments/comments.component';
import { NbaComponent } from './nba/nba.component';
import { NbaItemComponent } from './nba-item/nba-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    PhotoAlbumComponent,
    MainComponent,
    ArticleComponent,
    CommentsComponent,
    NbaComponent,
    NbaItemComponent
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
