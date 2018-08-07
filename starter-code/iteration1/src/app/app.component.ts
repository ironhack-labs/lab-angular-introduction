import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  album = [
    {title: 'Ironhack Madrid', image: 'https://www.kippel01.com/files//fotos/ironhack/ironhack-equipo-948.jpg'},
    {title: 'Ironhack Barcelona', image: 'http://blog.ironhack.com/wp-content/uploads/2016/07/hectorges-54-1024x683.jpg'},
    {title: 'Ironhack Miami', image: 'https://d9hhrg4mnvzow.cloudfront.net/code.ironhack.com/ux-ui-design-bootcamp-mia-en-sem/ce30dd5f-ironhack-dribble-6_0bp07s0bo07s000000.jpg'}
  ];
}
