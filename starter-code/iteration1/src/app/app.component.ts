import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  kanyeWestArray = [
    { name: "Kanye West The Life of Pablo", imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/The_life_of_pablo_alternate.jpg/220px-The_life_of_pablo_alternate.jpg" },
    { name: "Kanye West 808s & Heartbreak", imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/808s_%26_Heartbreak.png/220px-808s_%26_Heartbreak.png" },
    { name: "Kanye West My Beautiful Dark Twisted Fantasy", imgSrc: "http://cdn.wegotthiscovered.com/wp-content/uploads/cover.png" }
  ]
}
