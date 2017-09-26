import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image2',
  templateUrl: './image2.component.html',
  styleUrls: ['./image2.component.css']
})
export class Image2Component implements OnInit {

  url: string = "http://vignette1.wikia.nocookie.net/capcomdatabase/images/f/fc/Street_Fighter_IV_wallpaper_-_Chun-Li.jpg";
  description: string = "Foto chuliguapis de Chun Li";

  constructor() { }

  ngOnInit() {
  }

}
