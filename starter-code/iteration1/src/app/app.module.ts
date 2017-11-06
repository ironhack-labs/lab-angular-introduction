import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { MyMainComponentComponent } from './my-main-component/my-main-component.component';
import { MyCommentsComponentComponent } from './my-comments-component/my-comments-component.component';
import { MyGameComponentComponent } from './my-game-component/my-game-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMainComponentComponent,
    MyCommentsComponentComponent,
    MyGameComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
