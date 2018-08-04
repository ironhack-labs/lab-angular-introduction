import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main-component/main-component.component';
import { CommentComponent } from './comment-component/comment-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
