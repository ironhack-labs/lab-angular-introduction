import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { CommentComponentComponent } from './main-component/comment-component/comment-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    CommentComponentComponent,
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
