import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  champions = [
    {
      year: '2015-16',
      team: 'Cleveland Cavaliers',
      img: 'https://piratasdelbasket.net/wp-content/uploads/2017/05/cleveland-cavaliers.jpg',
      roster: ['Lebron James',
               'Kyrie Irving',
               'Kevin Love',
               'J.R. Smith',
               'Anderson Varejao']
    },
    {
      year: '2014-15',
      team: 'Golden State Warriors',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png',
      roster: ['Stephen Curry',
               'Klay Thompson',
               'Draymond Green',
               'Andrew Bogut',
               'Gestus Ezeli']
    },
    {
      year: '2013-14',
      team: 'San Antonio Spurs',
      img: 'https://vignette.wikia.nocookie.net/logopedia/images/d/d7/200px-San_Antonio_Spurs_svg.png/revision/latest?cb=20160511024947',
      roster: ['Tim Duncan',
               'Tony Parker',
               'Manu Ginobili',
               'Kawhi Leonard',
               'Tiago Splitter']
    }
  ]
}
