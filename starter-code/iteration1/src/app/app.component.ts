import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  images = [{
    url: "http://bodyambition.com/wp-content/uploads/2016/04/8dd49c79fad0a2f338838c2efc9e98dd.jpg",
    text: "Yoga posture 1"
  },
  {
    url: "https://www.shape.com/sites/shape.com/files/styles/slide/public/clouds-pose.jpg",
    text: "Yoga posture 2"
  },
  {
    url: "https://static1.squarespace.com/static/535d0a87e4b0a3d8cb40dce7/t/537909aee4b0cb63d6fb5774/1400441279905/",
    text: "Yoga posture 3"
  }
]
}
