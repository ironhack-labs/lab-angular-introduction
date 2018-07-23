import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Football album';
  photos: Array<Object> = [
    {
      id: 1,
      name: 'Zlatan',
      imgPath: 'https://www.alux.com/wp-content/uploads/2017/06/Zlatan-Ibrahimovic-Net-Worth.jpg'
    }, {
      id: 2,
      name: 'Ronaldo',
      imgPath: 'https://pbs.twimg.com/profile_images/645510260560523266/F9XVGYQa.jpg'
    }, {
      id: 3,
      name: 'Messi',
      imgPath: 'https://www.menshairstylestoday.com/wp-content/uploads/2016/05/Messi-Long-Hair-Soccer-Player-Haircuts.jpg'
    }
  ];
}
