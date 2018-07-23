import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Photo Album';
  album:Array<Object> = [{
    name: 'Ironhack Madrid',
    src: 'https://www.ironhack.com/assets/campus-image-slider/madrid-1.jpg'},
    {name: 'Ironhack Berlin',
    src: 'https://www.ironhack.com/assets/campus-image-slider/berlin-2.jpg'},
    {name: 'Ironhack Miami',
    src: 'https://www.ironhack.com/assets/campus-image-slider/miami-4.jpg'}
  ];
}
