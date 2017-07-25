import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  photoAlbum = [
    {imageUrl: 'https://i.blogs.es/d6087e/650_1000_code/450_1000.jpg', description: 'Ironhack Madrid'},
    {imageUrl: 'https://www.ironhack.com/assets/images/courses/front-end-course-3.jpg', description: 'Ironhack Barcelona'},
    {imageUrl: 'http://blog.ironhack.com/wp-content/uploads/2016/06/building2.jpg', description: 'Ironhack Miami'}
  ];


}
