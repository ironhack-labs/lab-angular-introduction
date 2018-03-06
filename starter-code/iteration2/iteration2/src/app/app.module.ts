import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommentscomponentComponent } from './commentscomponent/commentscomponent.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentscomponentComponent,
    MaincomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
