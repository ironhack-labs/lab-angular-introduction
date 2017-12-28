import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { PhotoArticleComponent } from './photo-article/photo-article.component';
import { CommentsBoxComponent } from './comments-box/comments-box.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NbaBoxComponent } from './nba-box/nba-box.component';
import { NbaItemComponent } from './nba-item/nba-item.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoAlbumComponent,
    PhotoArticleComponent,
    CommentsBoxComponent,
    CommentItemComponent,
    NavbarComponent,
    NbaBoxComponent,
    NbaItemComponent,
    FooterComponent
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
