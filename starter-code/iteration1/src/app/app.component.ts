import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  places: Array<{ name: string, imgUrl: string }> = [
    {
      name: 'Ironhack Madrid',
      imgUrl: 'https://pbs.twimg.com/media/CiHN8hVWUAAKxaK.jpg'
    },
    {
      name: 'Ironhack Barcelona',
      imgUrl: 'https://pbs.twimg.com/media/DOq1DqiXkAE5rfV.jpg'
    },
    {
      name: 'Ironhack Miami',
      imgUrl: 'https://pbs.twimg.com/media/DTBgs5aXkAA4NXI.jpg'
    }
  ];
}
