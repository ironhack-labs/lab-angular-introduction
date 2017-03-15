import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  photo =
    {foto: 'http://lorempixel.com/g/600/300/',
    text: 'Quisque justo ligula, tempus nec neque et, aliquet tempus lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis dapibus ligula arcu. Maecenas bibendum, magna nec sollicitudin euismod, nunc tortor porta nisl, id ullamcorper enim risus ut quam. Etiam sem nibh, commodo condimentum tempus consectetur, maximus ac libero.' }
  ;

  constructor() {

   }

  ngOnInit() {
  }

}
