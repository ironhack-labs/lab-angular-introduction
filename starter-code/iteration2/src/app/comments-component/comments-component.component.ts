import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comments',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  title= "Design Revolution: Pop My Eyes";
  image =  "https://assets1.ello.co/uploads/asset/attachment/4559902/ello-hdpi-382051dc.jpg";
  description = "Lorem ipsum dolor amet kombucha shaman vinyl pok pok offal. Disrupt kickstarter helvetica, trust fund single-origin coffee 3 wolf moon actually. Mumblecore man bun af adaptogen, stumptown bitters fingerstache copper mug deep v schlitz before they sold out fam jean shorts. Shoreditch tofu trust fund flannel vice. Asymmetrical mustache fanny pack selvage butcher. Next level raclette kogi poutine ramps. Edison bulb austin kickstarter prism. Blog try-hard unicorn, hexagon ugh actually typewriter pinterest cloud bread pour-over trust fund dreamcatcher. Chartreuse seitan cronut, fashion axe 90's tacos next level cloud bread cliche hashtag church-key occupy kickstarter trust fund sustainable. "

  constructor() { }

  ngOnInit() {
  }

}
