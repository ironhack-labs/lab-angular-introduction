import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  teams: Array<Object> = [
    {
      id: 1,
      src: 'https://www.solobasket.com/sites/default/files/styles/medium/public/logo-lalakers3_0.gif?itok=kVWQs0ge',
      epoca: 'Años 80',
      name: 'Los Angeles Lakers',
      five:["Lebron James","Kyrie Irving","Kevin Love","J. R. Smith","Anderson Varejao"] 
    }, {
      id: 2,
      src: 'https://www.solobasket.com/sites/default/files/styles/medium/public/logo-boston78.gif?itok=aar8cniJ',
      epoca: 'Años 80',
      name: 'Boston Celtics',
      five:["Lebron James","Kyrie Irving","Kevin Love","J. R. Smith","Anderson Varejao"] 
    }, {
      id: 3,
      src: 'https://www.solobasket.com/sites/default/files/styles/medium/public/logo-1967.gif?itok=w762trg8',
      epoca: 'Años 90',
      name: 'Chicago Bulls',
      five:["Lebron James","Kyrie Irving","Kevin Love","J. R. Smith","Anderson Varejao"] 
    }
  ];
}
