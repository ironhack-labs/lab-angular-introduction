import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    ['https://uproxx.files.wordpress.com/2017/10/big-mouth-grid-uproxx.jpg?quality=100&w=650' ,
     'My Dear Friend'],
    ['http://www.indiewire.com/wp-content/uploads/2017/08/bm103-andrew-nick-jessi-in-theater.png?w=780',
    "With My Chicuelos"],
    ['https://occ-0-2152-2433.1.nflxso.net/art/a80d1/6227bedb93e561042d0dcf6913e7a9d49e7a80d1.jpg',
     'At Ironhack']
  ];
}
