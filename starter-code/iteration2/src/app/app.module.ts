import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommentsComponentComponent } from './comments-component/comments-component.component';
import { MainComponentComponent } from './main-component/main-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentsComponentComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
