import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  
  photos: Array <Object> = [
    {
      src: 'https://banner2.kisspng.com/20180325/ghw/kisspng-homer-simpson-lisa-simpson-bart-simpson-marge-simp-simpsons-5ab773100deff4.8783974715219719840571.jpg',
      description: 'Image1'
    }, {
      src: 'https://banner2.kisspng.com/20180320/ghq/kisspng-bart-simpson-marge-simpson-homer-simpson-lisa-simp-cartoon-characters-simpsons-png-5ab1cf6a2012d7.8906544615216024101314.jpg',
      description: 'Image2'
    }, {
      src: 'https://banner2.kisspng.com/20180330/cbq/kisspng-homer-simpson-bart-simpson-donuts-computer-icons-simpsons-5abea49f9288d4.8535950815224434236002.jpg',
      description: 'Image3'
    }
  ];
}
