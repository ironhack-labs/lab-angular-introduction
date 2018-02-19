import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1> {{ title }} </h1>
        <div>
            <img src="{{ imgParis}}" alt="Paris">
            <img src="{{ imgLondres}}" alt="Londres">
            <img src="{{ imgBerlin}}" alt="Berlin">
            <p>Paris</p>
            <p>Londres</p>
            <p>Berlin</p>
        </div>
    `
})
export class AppComponent {
  title = 'Album de fotos';
  imgParis = "https://360radio.com.co/wp-content/uploads/2017/12/8f6f41_e7b5efb95d08451cba1d39f36509495e_mv2.jpg";
  imgLondres = "https://www.eatinglondontours.co.uk/wp-content/uploads/2014/04/1-DSC_0688.jpg?_ga=2.123030155.1640725114.1519056396-704062639.1519056396";
  imgBerlin = "http://www.dolcevitacoslada.com/2017/wp-content/uploads/2017/11/berlin.jpg";
}
