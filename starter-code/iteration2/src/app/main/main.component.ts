import { Component  } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
  title2: string = 'In the subway';
  image: string = './assets/sthlm1.jpg';
  description: string = "Lo-fi flannel hashtag authentic biodiesel. Ennui adaptogen whatever microdosing etsy lumbersexual pinterest palo santo chartreuse. Swag franzen plaid PBR&B master cleanse vaporware letterpress leggings mixtape live-edge heirloom truffaut distillery food truck. Flannel deep v VHS pok pok, vice kinfolk lomo pug bitters sartorial neutra 90's woke hexagon locavore. Chambray kale chips crucifix green juice activated charcoal, VHS PBR&B edison bulb umami flannel salvia pour-over keffiyeh jianbing. Chia pok pok hexagon, narwhal intelligentsia green juice hot chicken VHS taxidermy. Cold-pressed you probably haven't heard of them semiotics pabst. Edison bulb pork belly neutra, mumblecore flannel copper mug raclette schlitz banjo. Heirloom readymade fam, tote bag cornhole gastropub tumeric hot chicken twee knausgaard. Cornhole vegan polaroid scenester asymmetrical pitchfork. Yr air plant godard schlitz edison bulb farm-to-table knausgaard vape pop-up af. Street art.";
  comments = [
              {name: 'Jennie', description: 'This is awesome!'},
              
            ];

  constructor() { }


}
