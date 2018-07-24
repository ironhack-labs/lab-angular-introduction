import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  imagenes = [
    {url:"http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/SimpsonsBG_2013_R1_Sofa_hires2%281%29.jpg?itok=XOWZt1Nj&resize=1100x619", description:"IronHack Madrid"},
    {url:"https://cdn.vox-cdn.com/thumbor/q0rWPC_B2wzkrs71jZp08TVPuJA=/0x0:1500x1000/1820x1213/filters:focal(849x239:1089x479):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/58024173/simpsons.0.0.jpg",description:"IronHack Barcelona"},
    {url:"https://assets.foxdcg.com/dpp-uploaded/images/the-simpsons/the-simpsons_29/seriesDetail2.jpg?fit=inside%7C1920:1080", description:"IronHack Miami"}
  ]
}
