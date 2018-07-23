import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl:'./app.component.html'
})
export class AppComponent {
  Championships: Array<object> = [{ year: '2015-16', teamName: 'Cleveland Cavallers', teamImg:'https://cdn.shopify.com/s/files/1/1206/8370/products/large_2647_FF2068_large.jpg?v=1492357442', players:['Minyu', 'Victor', 'Beltran'] },
  { year: '2014-15', teamName: 'Golden State Warriors', teamImg: 'http://wwwcdn.howdesign.com/wp-content/uploads/LogoPrimary_300x329.jpg', players:['we', 'are', 'the', 'best']  },
  { year: '2013-14', teamName: 'San Antonio Spurs', teamImg: 'https://i2.wp.com/www.thebasketballnetwork.com/wp-content/uploads/2016/11/san-antonio-spurs.png?fit=905%2C490&ssl=1', players: ['somos', 'los', 'mejores'] }];
}
