import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Manu.pow(manu)';
  images:Array<object>=[
    {
      title : 'Risas1',
      description : 'paco',
      imgUrl : 'http://www.onepiecelovers.net/wp-content/uploads/2017/01/445262-one-piece-roronoa-zoro-660x330.jpg'
    },
    {
      title : 'Risas2',
      description : 'josue',
      imgUrl : 'http://cdn.atomix.vg/wp-content/uploads/2016/01/anime-one-punch-man-atomix-04.png'
    },
    {
      title : 'Risas3',
      description : 'herminia',
      imgUrl : 'http://3.bp.blogspot.com/-BjbpVQLejOI/UqgpXHopjuI/AAAAAAAABIk/5VDasGBzDPQ/s1600/abuela_rockera.jpg'
    },

  ]
}


