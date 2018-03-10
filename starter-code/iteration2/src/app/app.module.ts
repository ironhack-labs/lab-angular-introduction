import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { CommentsComponent } from './components/comments/comments.component';
import { FormCommentComponent } from './components/form-comment/form-comment.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CommentsComponent,
    FormCommentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
