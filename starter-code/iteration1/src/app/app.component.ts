import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  engImg = '../assets/img/tf2-events.jpg';
  pabloCrossDressing= '../assets/img/tumblr_oq1nrmh57Y1tpxzemo1_500.png';
  daCrew = '../assets/img/TF2Chars_Render.png';
  engP: string = 'TF2 Bad Boys!';
  pabloCrossDressingP: string = 'Pablo as A Girl!';
  daCrewP: string = 'The Crew!';
}
