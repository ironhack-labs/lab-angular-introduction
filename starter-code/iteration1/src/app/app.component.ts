import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  pictures: Array<{ imgSrc: string, footer: string }> = [
    { imgSrc: 'https://www.ironhack.com/0be4adcffad57cfca79dbf64b3889fc2.jpg', footer: 'Ironhack Madrid' },
    { imgSrc: 'http://blog.ironhack.com/wp-content/uploads/2017/01/best-coding-botcamp-ironhack-student-podcast-blog-header.jpg', footer: 'Ironhack Barcelona' },
    { imgSrc: 'https://dgivdslhqe3qo.cloudfront.net/careers/photos/20758/normal_photo_1479913482.jpg', footer: 'Ironhack Miami' }

  ];
}
