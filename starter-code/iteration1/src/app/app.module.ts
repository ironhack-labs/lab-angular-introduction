import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Iteration2Component } from './iteration2/iteration2.component';
import { Iteration3Component } from './iteration3/iteration3.component';
import { MyPropertyBindingComponent } from './my-property-binding/my-property-binding.component';
import { MyEventBindingComponent } from './my-event-binding/my-event-binding.component';
import { MyMixedBindingComponent } from './my-mixed-binding/my-mixed-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    Iteration2Component,
    Iteration3Component,
    MyPropertyBindingComponent,
    MyEventBindingComponent,
    MyMixedBindingComponent
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
