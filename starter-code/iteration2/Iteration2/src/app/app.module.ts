import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { ComentsComponentsComponent } from './coments-components/coments-components.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    ComentsComponentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
