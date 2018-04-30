import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo Album!';

  images: Array<Object> = [
    {
      id: 1,
      title: 'photo 1',
      src: 'https://www.riotgames.com/darkroom/1440/f5f167c525dd1f3989bcfe9ebd3c7995:a842310bd11ee602459b324d098e0e02/barcelona-main.jpg'
    },
    {
    id: 2,
    title: 'photo 2',
    src: 'https://www.riotgames.com/darkroom/1440/f5f167c525dd1f3989bcfe9ebd3c7995:a842310bd11ee602459b324d098e0e02/barcelona-main.jpg'
  },
  {
  id: 3,
  title: 'photo 3',
  src: 'https://www.riotgames.com/darkroom/1440/f5f167c525dd1f3989bcfe9ebd3c7995:a842310bd11ee602459b324d098e0e02/barcelona-main.jpg'
}
  ];
}
