import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  photos: Array<Object> = [
    {
      source: "sandwhich.jpg",
      desc: "cuban sandwhich"
    },
    {
      source: "sandwhich.jpg",
      desc: "cubanoo"
    },{
      source: "sandwhich.jpg",
      desc: "cubanito"
    }
  ]
}
