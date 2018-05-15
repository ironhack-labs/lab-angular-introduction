import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'T-Minus Three Weeks To Go!';
  imagePath: String = '/assets/images/giphy.gif';
  content: String = `Eyes on the prize, you're almost there!`;
  secretPhrase: String = 'waow';

  constructor() { }
    ngOnInit() {}
     
    sayHi(): void {
      console.log('hello');
    }


  



}

