import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppBlogComponent } from './app-blog/app-blog.component';
import { CommentsComponent } from './comments/comments.component';
import { ChampionComponent } from './champion/champion.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBlogComponent,
    CommentsComponent,
    ChampionComponent
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
