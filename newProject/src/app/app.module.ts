import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Iteration2Component } from './iteration2/iteration2.component';
import { Iteration1Component } from './iteration1/iteration1.component';
import { Iteration3Component } from './iteration3/iteration3.component';
import { MyNestedComponent } from './iteration2/my-nested/my-nested.component';

@NgModule({
  declarations: [
    AppComponent,
    Iteration2Component,
    Iteration1Component,
    Iteration3Component,
    MyNestedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
