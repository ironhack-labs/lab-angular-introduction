import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Iteration2MainComponent } from './iteration-2-main/iteration-2-main.component';
import { Iteration2CommentsComponent } from './iteration-2-comments/iteration-2-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    Iteration2MainComponent,
    Iteration2CommentsComponent
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
