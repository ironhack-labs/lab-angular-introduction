import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Disney Parks!';
  description01:string = 'Disneyland Paris';
  description02: string = 'Disneyland California';
  description03: string = "Disneyland Tokyo";
  img01: string = "../assets/img/paris.jpg";
  img02: string = "../assets/img/california.jpeg";
  img03: string = "../assets/img/tokio.jpg";
}
