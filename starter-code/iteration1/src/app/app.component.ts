import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  picList: any = [
  {img: 'https://media.giphy.com/media/xT9DPi33fXbUwpLatW/giphy.gif', caption: 'This is one gif'},
  {img: 'https://media.giphy.com/media/L0V4WWhxPIV4Q/giphy.gif', caption: 'This is another' },
  {img: 'https://media.giphy.com/media/BCXMSiVZeo8xy/giphy.gif', caption: 'Oh Look! A Caption' }
]
}
