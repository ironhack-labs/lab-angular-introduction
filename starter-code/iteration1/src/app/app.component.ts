import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pictureCollection: Array<Object> = [
    {
      id: 1,
      title: 'Yamaha-XS500E',
      img: 'https://www.motorcycleclassics.com/-/media/Images/MCC/Editorial/Articles/Magazine-Articles/2014/11-01/Half-Liter-Holdout-1978-Yamaha-XS500E/Yamaha-XS500E-Square-jpg.jpg'
    }, {
      id: 2,
      title: 'Yamaha TX500',
      img: 'http://www.realclassic.co.uk/bikepix/yamahatx08110201.jpg'
    }, {
      id: 3,
      title: 'Yamaha XJ550 Seca',
      img: 'https://www.motorcycleclassics.com/-/media/Images/MCC/Editorial/Articles/Magazine-Articles/2012/05-01/The-Yamaha-XJ550-Seca/Yamaha-XJ550-Seca.jpg'
    }, {
      id: 4,
      title: 'Yamaha 1.1S / XS1100',
      img: 'http://www.realclassic.co.uk/yamaha04102901.jpg'
    }
  ];
};
