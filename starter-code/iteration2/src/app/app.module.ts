import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCommentsComponent } from './my-comments/my-comments.component';
import { MyArticleComponent } from './my-article/my-article.component';
import { MyCommentFormComponent } from './my-comment-form/my-comment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCommentsComponent,
    MyArticleComponent,
    MyCommentFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
