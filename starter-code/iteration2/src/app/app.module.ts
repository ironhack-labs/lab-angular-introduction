import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { CommentsDisplayerComponent } from './comments-displayer/comments-displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CommentsDisplayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
