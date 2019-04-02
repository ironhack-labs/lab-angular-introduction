import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeamsDisplayerComponent } from './teams-displayer/teams-displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsDisplayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
