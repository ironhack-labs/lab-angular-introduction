import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IronHack BCN';
  image = 'https://cdn-images-1.medium.com/max/1600/1*J3QU3m0cf8jeg5HQ_rZVpw.jpeg';
  description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec ex sem. Duis a maximus nisl.
  Integer risus orci, imperdiet a commodo vel, congue at lorem.
  Aenean nec viverra ante.Etiam accumsan porta lectus, ac pharetra lacus varius quis.
  Donec hendrerit massa vitae vestibulum sodales. Morbi semper erat id nibh cursus cursus`;
}
