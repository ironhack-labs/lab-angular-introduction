import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Lab Ironhack';
  images: Array<Object> = [
    {
    source: './assets/img1.jpeg',
     desc: 'Ipanema Beach'
    },
    {
    source: './assets/img2.jpeg',
    desc: 'Maya Beach'
    },
    {
      source: './assets/img3.jpeg',
     desc: 'Bora Bora Beach'
    },
     ];
    }	
     

