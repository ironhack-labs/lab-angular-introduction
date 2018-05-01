import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyMainComponentComponent } from './my-main-component/my-main-component.component';
import { MyCommentsComponentComponent } from './my-comments-component/my-comments-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MyMainComponentComponent,
    MyCommentsComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
