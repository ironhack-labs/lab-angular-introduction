import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ADRV!';
  content=[{
    url:'https://plataformaadrv.files.wordpress.com/2012/10/cropped-249735_1849838443798_6454857_n.jpg',
    name:"A las Armas"

  },
  {
    url:'https://img.vavel.com/images/ADRV_867385999.jpg',
    name:"Somos de Vallecas"
  }
,{
  url:'http://es.globedia.com/imagenes/noticias/2012/6/29/plataforma-adrv-presenta-propuesta-abonos_1_1276985.jpg',
  name:'y vamos a ganar!!'
}
]
}
