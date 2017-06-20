import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { CommentsComponent } from './comments/comments.component';
import { NbaComponent } from './nba/nba.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CommentsComponent,
    NbaComponent
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
