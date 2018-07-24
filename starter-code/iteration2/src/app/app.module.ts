import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './commentsComponent/commentsComponent.component';
import { CommentsComponent } from './mainComponent/mainComponent.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
