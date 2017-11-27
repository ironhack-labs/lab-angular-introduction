import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  title = 'ADRV!';
  url= 'https://plataformaadrv.files.wordpress.com/2012/10/cropped-249735_1849838443798_6454857_n.jpg';
  description="A las armas (a las armas)";

  constructor() { }

  ngOnInit() {
  }

}
