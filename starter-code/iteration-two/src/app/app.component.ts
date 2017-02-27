import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
       <div>
           <h1> {{title}} </h1>
           <img src={{url}}>
           <p>{{description}}</p>
           <hr>
           <app-comments></app-comments>
        <div>
`
})
export class AppComponent {
  title: string = "Trump shrank";
  url: string = "http://i.dailymail.co.uk/i/pix/2017/02/18/00/3D5BC94800000578-4236568-image-a-35_1487377656002.jpg";
  description: string ="The nation is chocked as Trump has shrank. Like his ego."
}
