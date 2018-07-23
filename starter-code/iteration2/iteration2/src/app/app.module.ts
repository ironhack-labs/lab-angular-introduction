import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IterationMainComponentComponent } from './iteration-main-component/iteration-main-component.component';
import { IterationCommentsComponentComponent } from './iteration-comments-component/iteration-comments-component.component';

@NgModule({
  declarations: [
    AppComponent,
    IterationMainComponentComponent,
    IterationCommentsComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
