import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NbaChampsComponent } from './nba-champs/nba-champs.component';
import { NbachampsComponent } from './nbachamps/nbachamps.component';

@NgModule({
  declarations: [
    AppComponent,
    NbaChampsComponent,
    NbachampsComponent
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
