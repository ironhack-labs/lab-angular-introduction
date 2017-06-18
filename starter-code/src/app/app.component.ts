import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heck yes...lab-angular-introduction!';
  images: Object [] = [
    {
      name: 'Ironhack Madrid',
      src: '../assets/images/breather-163396.jpg'
    },
    {
      name: 'Ironhack Barcelona',
      src: '../assets/images/crew-87250.jpg'
    },
    {
      name: 'Ironhack Miami',
      src: '../assets/images/goran-ivos-245581.jpg'
    }
  ];
}
