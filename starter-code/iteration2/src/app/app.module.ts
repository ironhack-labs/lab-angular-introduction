import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { MainComponentComponent } from "./components/main-component/main-component.component";
import { MainComponentsComponent } from "./components/main-components/main-components.component";
import { CommentsComponent } from "./components/comments/comments.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainComponentComponent,
    MainComponentsComponent,
    CommentsComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
