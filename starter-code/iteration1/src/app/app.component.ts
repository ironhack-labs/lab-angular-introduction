import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  picList: Array<onePhoto>=[
    new onePhoto('Ironman Ironing','https://media.giphy.com/media/bCvO8biVh8WyI/giphy.gif'),
    new onePhoto('Ironman Infinite War','https://media.giphy.com/media/7OEje1TMS7hCw/giphy.gif'),
    new onePhoto('Ironman I','https://media.giphy.com/media/5D6vyiQ9XLMli/giphy.gif')
  ]
}

class onePhoto {
  constructor(
    public description: string,
    public picUrl: string
  ){}
}