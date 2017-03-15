import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App is janky as f*c$!';
}


// @Component({
//   selector: 'app-root',
//   template: `<h1>{{ name }} Angular2!</h1>
//       <ul>
//       <li *ngFor="let n of numbers">{{n}}</li>
//       </ul>
//       <ul>
//       <li *ngFor="let r of animals">{{r.name}}
//       <span>Weight: {{r.weight}}</span></li>
//       </ul>`
// })
//
// // app.js of our angular app
// export class AppComponent {
//   name: string = "Welcome to";
//   numbers: Array<number> = [1, 2, 3, 4, 5];
//   animals: Array<object> = [
//     {name: 'cat', weight: 100},
//     {name: 'turtle', weight: 50},
//     {name: 'dog', weight: 10}
//     ];
// }
