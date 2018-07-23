import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { CommentComponentComponent } from './comment-component/comment-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    CommentComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
