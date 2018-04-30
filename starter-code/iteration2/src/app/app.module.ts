import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { ComentsComponentComponent } from './coments-component/coments-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    ComentsComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
