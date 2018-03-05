import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos : Array<Object> = [
{
  source: 'tf2-pyro.jpg',
  desc: "TF2 Game"
},
{
  source: 'pubg.jpg',
  desc: "PUBG"
},
{
  source: "rust.jpg",
  desc: "Rust"
},
  ];

}
