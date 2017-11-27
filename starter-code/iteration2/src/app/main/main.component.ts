import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title: string;
  url: string;
  description: string;

  constructor() {
    this.title = "Learn how to code with Ironhack";
    this.url = "/assets/hqdefault.jpg";
    this.description = "Minions ipsum belloo! Tatata bala tu uuuhhh tatata bala tu jiji wiiiii. Baboiii daa underweaaar la bodaaa gelatooo poopayee butt poulet tikka masala ti aamoo! Potatoooo underweaaar belloo! Wiiiii tatata bala tu poulet tikka masala me want bananaaa! Ti aamoo! Po kass. Bappleees belloo! Belloo! Tatata bala tu hana dul sae po kass wiiiii potatoooo butt pepete baboiii. Hahaha poulet tikka masala po kass para tú. Ti aamoo! tank yuuu! Me want bananaaa! Tank yuuu! Uuuhhh";
  }

  ngOnInit() {
  }

}
