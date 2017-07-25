import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppMain } from './main.component';
import { AppComments} from './comments.component';

@NgModule({
  declarations: [
    AppMain
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppMain]
})
export class AppModule { }
