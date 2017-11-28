import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageOneSrc: string = "http://bookstacked.com/wp-content/uploads/2016/08/HagridHeader.jpg";

  imageOneDescription: string = "You're a wizard Harry";

  imageTwoSrc: string = "http://www.the-leaky-cauldron.org/wp-content/uploads/assets/Dobbybday2.jpg";

  imageTwoDescription: string = "Dobby is a free elf!";

  imageThreeSrc: string = "http://www.internationalhero.co.uk/w/weasleyron1.jpg";

  imageThreeDescription: string = "Why spiders? Why couldn’t it be ‘follow the butterflies’?";


}
