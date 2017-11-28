import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Championships: Array<object> = {}['Dog', 'Duck', 'Elephant', 'Zebra'];
}
