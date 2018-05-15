import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'These are the Pictures';
  photos = [{pic: 'assets/photos/dice.jpeg', dsp: 'Dice'},
    {pic: 'assets/photos/Sharkicorn.png', dsp: 'Sharkicorn'},
    {pic: 'assets/photos/wagon-guy.gif', dsp: 'Wagon Guy'}] 
}
