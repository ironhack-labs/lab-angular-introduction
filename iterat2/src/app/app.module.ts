import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { CommentsComponent } from './comments/comments.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CommentsComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
