import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { CommentscomponentComponent } from './commentscomponent/commentscomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    MaincomponentComponent,
    CommentscomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
