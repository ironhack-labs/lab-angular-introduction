import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Xvideos';
  photo:Array<Object> =[
    { 
      src:"https://misanimales.com/wp-content/uploads/2016/10/cara-de-un-perro.jpg",
      description:"Perrito"
    }, {
      src:"http://as01.epimg.net/tikitakas/imagenes/2017/03/03/portada/1488545991_954393_1488546312_noticia_normal.jpg",
      description:"Cara Rota Weight"
}, {
      src:"http://static2.elcorreo.com/www/multimedia/201802/18/media/cortadas/campos-ingresada-kcc-U50999954727Br-624x385@RC.jpg",
      description:"Maria Teresa Campos"
}
  
      ]
    }
