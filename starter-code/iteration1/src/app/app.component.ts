import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Tesla Album';
  // animals: Array<string> = ['Dog', 'Duck', 'Elephant', 'Zebra'];
  img = 'https://png.icons8.com/color/1600/tesla-logo.png';
  img1: Object = {
    // tslint:disable-next-line:max-line-length
    link: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Tesla_Model_S_%28Facelift_ab_04-2016%29_trimmed.jpg',
    description: 'Model S'
  };

  img2: Object = {
    link: 'https://cdn.teslarati.com/wp-content/uploads/2017/11/Roadster_Front_34_1-e1512593855725.jpg',
    description: 'Roadster'
  };
  img3: Object = {
    link: 'https://static.seekingalpha.com/uploads/2018/4/20/48200183-15242024322481751_origin.jpg',
    description: 'Model X'
  };
}
