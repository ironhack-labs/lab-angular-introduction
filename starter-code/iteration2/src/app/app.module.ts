import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { MyPostComponent } from './my-post/my-post.component';
import { MyCommentsComponent } from './my-comments/my-comments.component';
import { CommentFormComponent } from './my-comments/comment-form/comment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPostComponent,
    MyCommentsComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- This is what adds ngModel
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
