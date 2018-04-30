import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dashboard = [
    {
      year: 1987,
      champion: 'McLaren',
      // tslint:disable-next-line:max-line-length
      championUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Ayrton_Senna_1992_Monaco.jpg/220px-Ayrton_Senna_1992_Monaco.jpg',
      bestPlayers: 'Senna'
    },
    {
      year: 1988,
      champion: 'Ferrari',
      championUrl: 'https://cdnb.20m.es/quefuede/files/alainprost.jpg',
      bestPlayers: 'Prost'
    },
    {
      year: 1989,
      champion: 'Ferrari',
      // tslint:disable-next-line:max-line-length
      championUrl: 'https://www.formula1.com/content/fom-website/en/championship/drivers/hall-of-fame/Niki_Lauda/_jcr_content/featureContent/manual_gallery/image4.img.jpg',
      bestPlayers: 'Lauda'
    }
  ];
}
