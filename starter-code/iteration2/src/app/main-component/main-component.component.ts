import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  contenido = {
    title : "Escapada",
    img : 'http://www.excursionesporhuesca.es/wp-content/uploads/2013/08/Pigalo-4-Panorama-4.jpg',
    description: "Excursion por el campo y chapuzón en piscinas naturales"
  }
  constructor() { }

  ngOnInit() {
  }

}
