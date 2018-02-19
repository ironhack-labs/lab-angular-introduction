import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentFormComponent } from './comment-form/comment-form.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CommentsComponent,
    CommentFormComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
