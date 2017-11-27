import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  info:Array<any> = [
    {
      img: 'http://www.elreferente.es/source/ironhack-hackshow-interior.jpg',
      desc:'Ironhack Madrid'

    },
    {
      img: 'https://cdn.evbuc.com/eventlogos/130268051/img3301128129.jpg',
      desc: 'Ironhack Miami'
    },
   {
     img: 'http://blog.ironhack.com/wp-content/uploads/2016/07/hectorges-52-1024x683.jpg',
     desc: 'Ironhack Barcelona'
   }
  ]

}
