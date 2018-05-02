import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CommunistNationsComponent } from "./communist-nations/communist-nations.component";

@NgModule({
  declarations: [AppComponent, CommunistNationsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
