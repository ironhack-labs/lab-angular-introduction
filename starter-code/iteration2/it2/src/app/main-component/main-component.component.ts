import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainCOmponentComponent implements OnInit {

  mainContent: Array<any>=[
    {
    title: 'Learn to code w/IH',
    image: 'https://www.goodnet.org/photos/620x0/23054.jpg',
    description: "Cackle fruit rope's end bilge rat boom gunwalls Shiver me timbers yard scallywag aye rigging chase league grog. Interloper driver league long boat holystone hardtack trysail crimp Cat o'nine tails rope's end boatswain yardarm plunder. Scurvy come about draft clipper tack landlubber or just lubber wench haul wind skysail squiffy tender square-rigged aye. Lee quarterdeck clap of thunder furl ye trysail brig bilge grog keel barque loot nipperkin. Landlubber or just lubber pirate quarterdeck gabion stern gangplank long clothes Buccaneer quarter carouser hulk Admiral of the Black lee."
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
