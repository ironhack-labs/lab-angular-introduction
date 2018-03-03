import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  imgURL:string = 'http://canciones-infantiles.com.es/wp-content/uploads/2013/11/portada-cancion-el-patio-de-mi-casa-7.jpg';
  descripion:string= 'alalalalalallalalaa ala la ala allalala';
  title:string='un articulo de lo mas curioso';
  constructor() { }

  ngOnInit() {
  }

}
