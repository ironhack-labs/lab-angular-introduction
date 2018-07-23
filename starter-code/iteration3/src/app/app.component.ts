import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  championships = [{
    year: 2015-16,
    champion: 'Cleveland Cavaliers',
    "url": 'https://worldsportlogos.com/wp-content/uploads/2018/01/Cleveland-Cavaliers-logo-600x338.png',
    best: ['Lebron James', 'Kirie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao']
  }, {
    year: 2016-17,
    champion: 'Golden State Warriors',
    "url": 'http://wwwcdn.howdesign.com/wp-content/uploads/LogoPrimary_300x329.jpg',
    best: ['Stephen Curry', 'Klay Thompson', 'Draymond Green', 'Andrew Bogut', 'Gestus Ezeli']
  }, {
    year: 2018-19,
    champion: 'Golden State Warriors',
    "url": 'http://wwwcdn.howdesign.com/wp-content/uploads/LogoPrimary_300x329.jpg',
    best: ['Stephen Curry', 'Klay Thompson', 'Draymond Green', 'Kevin Durant', 'Andre Iguodala']
  } ]
}
