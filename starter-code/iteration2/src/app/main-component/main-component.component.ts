import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
    imagen = "https://cdnb.20m.es/sites/76/2015/07/La-an%C3%A9cdota-sobre-la-famosa-e-ic%C3%B3nica-foto-de-Albert-Einstein-sacando-la-lengua.jpeg"
    title = "Qijote Ipsum"
    description = "Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no t"
  constructor() { }

  ngOnInit() {
  }

}
