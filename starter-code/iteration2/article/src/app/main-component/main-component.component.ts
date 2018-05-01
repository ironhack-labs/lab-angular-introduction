import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor() { }

  title: string = "Learn how to code with IronHack"
  description: string = "descripcion del articulo"
  imgLink: string = "https://secure.meetupstatic.com/photos/theme_body/2/f/1/7/full_7452055.jpeg"

  

  ngOnInit() {
  }

}
