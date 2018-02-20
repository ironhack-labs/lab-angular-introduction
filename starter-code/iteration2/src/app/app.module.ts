import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { MainComponentComponent } from './main-component/main-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
