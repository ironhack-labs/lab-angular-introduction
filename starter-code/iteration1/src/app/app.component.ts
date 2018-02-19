import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <div class="my-images">
    <div class="bojack">
      <img src="{{image}}">
      <p>{{description}}</p>
    </div>
    <div class="rick">  
      <img src="{{image2}}">
      <p>{{description2}}</p>
    </div>
    <div class="archer">     
      <img src="{{image3}}">
      <p>{{description3}}</p>
    </div>  
  </div>
  `,


})
export class AppComponent {
  title = "A collection of wonderful disasters.";
  image = "https://vignette.wikia.nocookie.net/bojackhorseman/images/4/41/BoJack_image.png/revision/latest?cb=20170830202312";
  description = "Back in the 90s I was in a very famous TV show.";

  image2= "https://vignette.wikia.nocookie.net/rick-y-morty-espanol/images/d/dd/Rick.png/revision/latest?cb=20170327172715&path-prefix=es";
  description2 = "Rick Sanchez. Scientist. Madman. Probably a God in some dimensions.";

  image3= "http://www.thesoundarchive.com/images/Tiles/archer.png";
  description3 = "Sterling Archer. The best worst spy in the history of mankind.";
}
