import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  title = "Pepe es el rey!!";
  img = "http://static.alfabetajuega.com/abj_public_files/multimedia/imagenes/alfabetajuega-pepe-the-frog-1-151217.jpg";
  description = `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
  Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor 
  (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal 
  manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó 
  como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.`

  constructor() { }

  ngOnInit() {
  }

}
