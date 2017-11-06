import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Favorite Cities!';

  my1stPhoto: string = 'http://www.visitflorida.com/content/dam/visitflorida/en-us/images/cities/miami/Downtown2011_08.jpg';
  my1stPhotoComment: string = 'Miami';
  my2ndPhoto: string = 'http://www.seetorontonow.com/wp-content/uploads/2017/10/toronto-fall-sunset.jpg';
  my2ndPhotoComment: string = 'Toronto';
  my3rdPhoto: string = 'https://cdn.flixbus.de/city_description_images/vienna-nightlife.jpg';
  my3rdPhotoComment: string = 'Vienna';
  // photos: Array<Object> = [{
  //     id: 1,
  //     Image: string = 'http://placekitten.com/g/300/300',
  //     comment: 'First Photo'
  // },{
  //     id: 2,
  //     Image: string = 'http://placekitten.com/g/300/300',
  //     comment: 'Second Photo'
  // },{
  //     id: 3,
  //     Image: string = 'http://placekitten.com/g/300/300',
  //     comment: 'Third Photo'
  // }];

}
