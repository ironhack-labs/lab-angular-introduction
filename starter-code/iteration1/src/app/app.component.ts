import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tfImage = '../assets/images/tf2-pyro.jpg';
  pubgImage = '../assets/images/rust.jpg';
  rustImage = '../assets/images/pubg.jpg';
  tf: string = "TF2";
  pubg: string = "PUBG";
  rust: string = "Rust";

}
