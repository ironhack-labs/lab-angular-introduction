import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Image1Component } from './image1/image1.component';
import { Image2Component } from './image2/image2.component';
import { Image3Component } from './image3/image3.component';
import { MainComponent } from './main/main.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    Image1Component,
    Image2Component,
    Image3Component,
    MainComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
