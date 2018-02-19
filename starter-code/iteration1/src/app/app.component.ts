import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app works!';
  pictures: Array<object> = [{
    src: "http://as01.epimg.net/tikitakas/imagenes/2017/04/20/portada/1492711850_660606_1492711989_noticia_normal.jpg",
    description: "Cristiano Ronaldo, es un futbolista portugués que juega en el Real Madrid de la Primera División de España y en la selección de Portugal, de la que es capitán"
  },
    {
    src: "http://www.estrategiaynegocios.net/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=36jfjMPOTpMo5DQgS1eGv8$daE2N3K4ZzOUsqbU5sYvio$Z8xxEgLqOKfF0eHuyJ6FB40xiOfUoExWL3M40tfzssyZqpeG_J0TFo7ZhRaDiHC9oxmioMlYVJD0A$3RbIiibgT65kY_CSDiCiUzvHvODrHApbd6ry6YGl5GGOZrs-&CONTENTTYPE=image/jpeg",
    description: "Steven Jobs fue un empresario y magnate de los negocios del sector informático y de la industria del entretenimiento estadounidense."
  },
  {
    src: "https://specials-images.forbesimg.com/imageserve/59d5062131358e542c034eb7/416x416.jpg?background=000000&cropX1=419&cropX2=1409&cropY1=53&cropY2=1044",
    description: "Mark Elliot Zuckerberg es un programador, filántropo y empresario estadounidense conocido por ser el creador de Facebook.",
  }
  ]

}
