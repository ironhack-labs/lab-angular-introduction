import { Component} from '@angular/core';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent{
  nba: Array<Object> = [
    {
      equipo: 'Cleveland Cavaliers',
      fecha: '2015-16',
      img: 'http://wksu.org/news/images/38532/Cavaliers-Logo.png',
      best: 'Best Players',
      uno: 'Lebron James',
      dos:  'Kyrie Irving',
      tres:  'Kevin Love',
      cuatro:  'J.R Smith',
      cinco: 'Anderson Varejao'
    }, {
      equipo: 'Golden State Warriors',
      fecha: '2014-15',
      img: 'https://i.ebayimg.com/images/g/vGoAAOSwgHZYCze7/s-l300.jpg',
      best: 'Best Players',
      uno: 'Stephen Carrey',
      dos:  'Klay Thompson',
      tres:  'Draymong Green',
      cuatro:  'Andrew Bogut',
      cinco: 'Gestus Ezeli'
    }, {
      equipo: 'San Antonio Spurs',
      fecha: '2013-14',
      img: 'https://goodlogo.com/images/logos/san_antonio_spurs_logo_3932.png',
      best: 'Best Players',
      uno: 'Tim Duncan',
      dos:  'Tony Parker',
      tres:  'Manu Ginóbili',
      cuatro:  'Kawhi Leonard',
      cinco: 'Tiago Splitter'
    }
  ];
}
