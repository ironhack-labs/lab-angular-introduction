import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image1',
  templateUrl: './image1.component.html',
  styleUrls: ['./image1.component.css']
})
export class Image1Component implements OnInit {

  url: string = "http://media.oregonlive.com/ent_impact_home/photo/super-mariojpg-11d71ebbb49b2faa.jpg";
  description: string = "Foto chuliguapis de Super Mario";

  constructor() { }

  ngOnInit() {
  }

}
