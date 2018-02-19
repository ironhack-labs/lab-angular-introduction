import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CommentsComponentComponent } from './comments-component/comments-component.component';
import { CommentFormComponent } from './comment-form/comment-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
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
