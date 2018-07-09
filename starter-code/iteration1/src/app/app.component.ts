import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ironhack Album!';

  photos: Array<Photo> = [
    {photoUrl: 'https://images1.miaminewtimes.com/imager/u/745x420/9990174/https_3a_2f_2fcdn.evbuc.com_2fimages_2f38875366_2f131179927357_2f1_2foriginal.jpg_h_200_w_450_rect_0_2c1008_2c4032_2c2016_s_f94a7c7e49a8045a9f07855451ac232d',
          title: 'Ironhack Paris'},
    {photoUrl: 'https://images.itnewsinfo.com/lmi/articles/grande/000000060808.jpg',
          title: 'Ironhack Madrid'},
    {photoUrl: 'http://scd.mashable.france24.com/sites/default/files/styles/mashable_983x554/public/thumbnails/image/ironhack.jpg?itok=Jh3UZ7rN',
          title: 'Ironhack Miami'},
  ];

}

class Photo {
  photoUrl: String;
  title: String;
}