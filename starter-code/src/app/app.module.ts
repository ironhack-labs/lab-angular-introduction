import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IterationComponent } from './iteration/iteration.component';
import { Iteration1Component } from './iteration-1/iteration-1.component';
import { Iteration2Component } from './iteration-2/iteration-2.component';
import { Iteration2bComponent } from './iteration-2b/iteration-2b.component';
import { Iteration3Component } from './iteration-3/iteration-3.component';

@NgModule({
  declarations: [
    AppComponent,
    IterationComponent,
    Iteration1Component,
    Iteration2Component,
    Iteration2bComponent,
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
