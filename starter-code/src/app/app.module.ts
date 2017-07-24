import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyNestedComponent } from './my-nested/my-nested.component';
import { Iteration1Component } from './iteration1/iteration1.component';
import { Iteration2Component } from './iteration2/iteration2.component';
import { Iteration2BComponent } from './iteration2-b/iteration2-b.component';
import { Iteration3Component } from './iteration3/iteration3.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNestedComponent,
    Iteration1Component,
    Iteration2Component,
    Iteration2BComponent,
    Iteration3Component
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
