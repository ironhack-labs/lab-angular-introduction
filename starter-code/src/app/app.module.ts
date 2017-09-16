import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { MainComponent } from './main/main.component';
import { CommentsComponent } from './comments/comments.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CounterComponent } from './counter/counter.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';
import { PhotoComponent } from './photo/photo.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoAlbumComponent,
    MainComponent,
    CommentsComponent,
    NavBarComponent,
    CounterComponent,
    QuoteListComponent,
    QuoteItemComponent,
    PhotoComponent,
    CommentBoxComponent
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
