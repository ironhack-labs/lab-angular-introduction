import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyNestedComponent } from './my-nested/my-nested.component';
import { MyCommentBindingComponent } from './my-comment-binding/my-comment-binding.component';
import { NbaChampsComponent } from './nba-champs/nba-champs.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNestedComponent,
    MyCommentBindingComponent,
    NbaChampsComponent
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
