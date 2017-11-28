import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Gatetes! ^-^';
  imgAlbum:object = [
    {img : "https://i.pinimg.com/736x/35/8c/57/358c57c204a2fec21fa50b917a0728aa--rainbow-face-rainbow-prism.jpg",
      description : "Rainbow Kitty"},
    {img : "https://pbs.twimg.com/media/C5iQlTzVMAAu65S.jpg",
      description : "Kitty :P"},
    {img : "https://media.mnn.com/assets/images/2016/11/cat-with-big-eyes-gimo.jpg.653x0_q80_crop-smart.jpg",
      description : "Sweet Eyes"},
  ];
  heightcat:string = "200";
}
