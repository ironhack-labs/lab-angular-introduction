import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1:string = 'Only cats! - Iteration #1';
  fotos: Array<Object> = [
    {url: "http://lorempixel.com/400/200/cats", desc: "cat"},
    {url: "http://lorempixel.com/400/200/animals", desc: "animal"},
    {url: "http://lorempixel.com/400/200/sports", desc: "sports"}
  ];
}
