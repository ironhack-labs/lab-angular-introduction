import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  imagen1: string = "https://i.pinimg.com/originals/52/b6/b7/52b6b7fe3cfb94fa49fb94ad44eb3315.jpg";
  imagen2: string = "https://i.pinimg.com/originals/68/4c/62/684c62aa2fe9c5a80072d642ab08baec.jpg";
  imagen3: string = "http://cdn2.gamedots.mx/media/gd/styles/gallerie/public/images/2015/09/halo4reviewvolt.jpg";

  titulo1: string = "El master cocinando!!";
  titulo2: string = "El master nomas!!";
  titulo3: string = "Al ultimo master!!";
}
