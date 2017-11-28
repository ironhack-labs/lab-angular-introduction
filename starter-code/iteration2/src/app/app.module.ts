import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommentComponentComponent } from './comment-component/comment-component.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentComponentComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
