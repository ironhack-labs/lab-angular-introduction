import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { CommentsComponentComponent } from './comments-component/comments-component.component';
import { NewpipePipe } from './newpipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    CommentsComponentComponent,
    NewpipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
