import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Iteration1: Photo Album';
  pictures: Array<Object> = [
    {
      pic: 'https://media.giphy.com/media/l0IyayMlfXiWKTJCM/giphy.gif',
      caption: 'C\'est la vie d\'un chien'
    },
    {
      pic:'https://media.giphy.com/media/xUOxfgTVoxoXcxcsM0/giphy.gif',
      caption: 'Donald crying over his stock going down',
    },
    {
      pic: 'https://media.giphy.com/media/bvUMY0my1e5W0/giphy.gif',
      caption:'Bravo, you did it [internally rolling eyes]'
    }
  ];
}

