import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Favorite Cities!';

  photos: Array<Object> = [{
      image: 'http://www.visitflorida.com/content/dam/visitflorida/en-us/images/cities/miami/Downtown2011_08.jpg',
      comment: 'Miami'
  },{
      image: 'http://www.seetorontonow.com/wp-content/uploads/2017/10/toronto-fall-sunset.jpg',
      comment: 'Toronto'
  },{
      image: 'https://cdn.flixbus.de/city_description_images/vienna-nightlife.jpg',
      comment: 'Vienna'
  }];

}
