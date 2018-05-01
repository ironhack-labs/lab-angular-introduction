import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  array: Array<Object> = [
    {
      url:
        'https://www.petdarling.com/articulos/wp-content/uploads/2014/06/como-quitarle-las-pulgas-a-mi-perro.jpg',
      description: 'dog'
    },
    {
      url:
        'https://www.anipedia.net/imagenes/caracteristicas-generales-de-los-gatos.jpg',
      description: 'cat'
    },
    {
      url:
        'https://www.recetasderechupete.com/wp-content/uploads/2009/10/lentejas.jpg',
      description: 'lentejas'
    }
  ];
}
