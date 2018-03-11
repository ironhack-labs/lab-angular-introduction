import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { CommentNewComponent } from './components/comment-new/comment-new.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentItemComponent,
    CommentNewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
