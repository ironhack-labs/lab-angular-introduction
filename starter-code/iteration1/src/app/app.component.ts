import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos: Array<Photos> = [
    new Photos("Dachshund","https://media.giphy.com/media/S7MpxxGT3EnDy/giphy.gif"),
    new Photos("Bear","https://media.giphy.com/media/ot2wrNTY362tO/giphy.gif"),
    new Photos("Pig","https://media.giphy.com/media/UxCmKnrLvEC5y/giphy.gif"),
  ];
}



class Photos{
  constructor(
    public caption: string,
    public imgUrl: string
  ){}
}
