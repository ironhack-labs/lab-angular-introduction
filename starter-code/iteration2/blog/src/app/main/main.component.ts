import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    title = 'Learn how to code with Ironhack';
    image = 'assets/img/madrid.jpeg';
    description = `Lorem ipsum dolor amet mumblecore vaporware kitsch, 
    godard beard man braid raclette celiac. Distillery cronut tbh, 
    pug vexillologist skateboard food truck deep v enamel pin. 
    Hashtag sustainable gluten-free aesthetic, before they sold out air 
    plant locavore chicharrones. Raw denim food truck brunch, actually thundercats 
    waistcoat sustainable VHS messenger bag man braid readymade. Cardigan enamel pin 
    cray live-edge edison bulb. Hashtag whatever adaptogen wolf chicharrones, health 
    goth live-edge pok pok jean shorts fanny pack vape +1 bushwick poke organic. 
    Thundercats tbh 8-bit, polaroid +1 humblebrag taiyaki sartorial vinyl.`;
  constructor() { }
  ngOnInit() {
      }
  }
}
