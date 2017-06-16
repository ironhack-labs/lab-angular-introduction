import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TheArticleComponent } from './the-article/the-article.component';
import { TheCommentsComponent } from './the-comments/the-comments.component';
import { TheInputFormComponent } from './the-input-form/the-input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TheArticleComponent,
    TheCommentsComponent,
    TheInputFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
