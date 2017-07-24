import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  iterationOne: Array<Object> = [{ title: "Ironhack Madrid", image: "assets/images/ironhack-madrid.jpg" },
    { title: "Ironhack Barcelona", image: "assets/images/ironhack-barcelona.jpg" },
    { title: "Ironhack Miami", image: "assets/images/ironhack-miami.jpg" }];
}
