import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { CommentsComponentComponent } from './comments-component/comments-component.component';
import { CommentFormComponent } from './comment-form/comment-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    CommentsComponentComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
