import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'photo album';
  arrayView = [ {desc : 'crocodile', photo: '../assets/images/crocodile.jpg'}, {desc: 'GOTdragon', photo: '../assets/images/dragon.jpeg'},
                {desc: 'bad dog sits on cat', photo: '../assets/images/dogoncat.jpg'} ];
}
