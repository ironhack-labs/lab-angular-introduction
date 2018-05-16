import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { ChampionshipsComponent } from './championships/championships.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    ChampionshipsComponent
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
