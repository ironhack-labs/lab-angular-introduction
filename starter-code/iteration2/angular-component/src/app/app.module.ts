import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MainComponent } from './app.component';
import { MyCommentsComponent } from './my-comments/my-comments.component';


@NgModule({
  declarations: [
    MainComponent,
    MyCommentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
