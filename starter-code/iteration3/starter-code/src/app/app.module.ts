import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
