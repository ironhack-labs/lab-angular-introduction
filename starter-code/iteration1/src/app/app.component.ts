import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  picture:Array<object> = [
    {src:'https://farm6.staticflickr.com/5112/6970631088_f8a396cc6a.jpg',description:'Out of the blue'},
    {src:'http://rockinsider.com/wp-content/uploads/2011/11/BadPanda105-Visiol-EP-500x500.jpg',description:'Rock Insider'},
    {src:'https://c1.staticflickr.com/9/8644/16517781789_6ed90c5678.jpg',description:'Loop'}
  ]
}
