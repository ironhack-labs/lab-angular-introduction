import { Component } from '@angular/core';
import champions from "./champions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  championsList = champions;
  championships: Array<any> = [];
  bestPlayers: Array<any> = [];
}
