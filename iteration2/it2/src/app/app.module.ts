import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CommentsComponent } from './main/comments/comments.component';
import { ChampionsComponent } from './main/champions/champions.component';
import { MyProprtyBindingComponent } from './my-proprty-binding/my-proprty-binding.component';
import { MyEventBindComponent } from './my-event-bind/my-event-bind.component';
import { MyMixedBindComponent } from './my-mixed-bind/my-mixed-bind.component';
import { MyTwoWayBindComponent } from './my-two-way-bind/my-two-way-bind.component';
import { PipeEmBoyComponent } from './pipe-em-boy/pipe-em-boy.component';

import {CapitalizePipe} from './pipes/capitalize.pipe';
import { AnimalsComponent } from './animals/animals.component';
import { SignupFormComponent } from './signup-form/signup-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CommentsComponent,
    ChampionsComponent,
    MyProprtyBindingComponent,
    MyEventBindComponent,
    MyMixedBindComponent,
    MyTwoWayBindComponent,
    PipeEmBoyComponent,
    CapitalizePipe,
    AnimalsComponent,
    SignupFormComponent
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
