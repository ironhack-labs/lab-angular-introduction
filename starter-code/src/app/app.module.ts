import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Iteration1Component } from './iteration-1/iteration-1.component';
import { Image2Component } from './image2/image2.component';
import { Image3Component } from './image3/image3.component';
import { MainComponent } from './main/main.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    Iteration1Component,
    Image2Component,
    Image3Component,
    MainComponent,
    CommentComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
