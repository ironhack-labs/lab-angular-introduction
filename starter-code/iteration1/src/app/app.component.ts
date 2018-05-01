import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private photo1 = require("../assets/1.jpg");
  private photo2 = require("../assets/2.jpg");
  private photo3 = require("../assets/3.jpg");
}
