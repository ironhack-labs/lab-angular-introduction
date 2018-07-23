import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentsComponentComponent } from './comments-component/comments-component.component';
import { CommentComponent } from './comments-component/comments-component.component.spec';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
