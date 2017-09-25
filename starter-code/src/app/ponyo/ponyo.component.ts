import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ponyo',
  templateUrl: './ponyo.component.html',
  styleUrls: ['./ponyo.component.css']
})
export class PonyoComponent implements OnInit {
  image = "https://gurlgonegeek.files.wordpress.com/2011/03/ponyo-7402901.jpg";
  description = "Ponyo having funny moments under the rain"

  constructor() { }

  ngOnInit() { }

}
