import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  motorArticle: Array<Object> = [
    {
      id: 1,
      title: 'Yamaha-XS500E',
      img: 'https://www.motorcycleclassics.com/-/media/Images/MCC/Editorial/Articles/Magazine-Articles/2014/11-01/Half-Liter-Holdout-1978-Yamaha-XS500E/Yamaha-XS500E-Square-jpg.jpg',
      body: 'Lorem fistrum condemor aliquip quietooor aliquip ut nostrud adipisicing duis te va a hasé pupitaa ese pedazo de. Reprehenderit hasta luego Lucas quis ahorarr amatomaa consectetur quis a wan amatomaa. Ese hombree a wan duis reprehenderit. Pupita voluptate sit amet occaecat eiusmod commodo. Et adipisicing a peich me cago en tus muelas torpedo ullamco et.',
    }, {
      id: 2,
      title: 'Yamaha TX500',
      img: 'http://www.realclassic.co.uk/bikepix/yamahatx08110201.jpg',
      body: 'Lorem fistrum condemor aliquip quietooor aliquip ut nostrud adipisicing duis te va a hasé pupitaa ese pedazo de. Reprehenderit hasta luego Lucas quis ahorarr amatomaa consectetur quis a wan amatomaa. Ese hombree a wan duis reprehenderit. Pupita voluptate sit amet occaecat eiusmod commodo. Et adipisicing a peich me cago en tus muelas torpedo ullamco et.',
    }, {
      id: 3,
      title: 'Yamaha XJ550 Seca',
      img: 'https://www.motorcycleclassics.com/-/media/Images/MCC/Editorial/Articles/Magazine-Articles/2012/05-01/The-Yamaha-XJ550-Seca/Yamaha-XJ550-Seca.jpg',
      body: 'Lorem fistrum condemor aliquip quietooor aliquip ut nostrud adipisicing duis te va a hasé pupitaa ese pedazo de. Reprehenderit hasta luego Lucas quis ahorarr amatomaa consectetur quis a wan amatomaa. Ese hombree a wan duis reprehenderit. Pupita voluptate sit amet occaecat eiusmod commodo. Et adipisicing a peich me cago en tus muelas torpedo ullamco et.',
    }, {
      id: 4,
      title: 'Yamaha 1.1S / XS1100',
      img: 'http://www.realclassic.co.uk/yamaha04102901.jpg',
      body: 'Lorem fistrum condemor aliquip quietooor aliquip ut nostrud adipisicing duis te va a hasé pupitaa ese pedazo de. Reprehenderit hasta luego Lucas quis ahorarr amatomaa consectetur quis a wan amatomaa. Ese hombree a wan duis reprehenderit. Pupita voluptate sit amet occaecat eiusmod commodo. Et adipisicing a peich me cago en tus muelas torpedo ullamco et.',
    }
  ];
};
