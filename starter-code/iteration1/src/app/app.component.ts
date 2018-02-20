import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'THIS IS TEST 5473-12-RJ/bec';

  image1: string = "https://media-cdn.tripadvisor.com/media/photo-s/02/4b/7c/f8/female-seal.jpg";
  info1: string = "Foca";

  image2: string = "http://www.elephantseal.org/images/bullnfemale.jpg"
  info2: string = "Madre foca";

  image3: string = "http://i.dailymail.co.uk/i/pix/2015/05/27/10/2919D22C00000578-3098876-image-a-12_1432718913512.jpg"
  info3: string = "Foquit";
}
