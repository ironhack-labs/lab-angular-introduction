import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'DE | Angular Introduction';
  subtitle: string = 'Iteration #1: Photo Album'
  photoUrl1: string = 'https://img-fotki.yandex.ru/get/5301/199839678.1e6/0_cfc5a_2bbdf6a2_S'
  photoUrl2: string = 'https://img-fotki.yandex.ru/get/9746/199839678.1e5/0_cfc56_19621687_S'
  photoUrl3: string = 'https://img-fotki.yandex.ru/get/9170/199839678.1e6/0_cfc59_e0296e21_S'
  description1: string = 'Pink Monster';
  description2: string = 'Yellow Monster';
  description3: string = 'Mint Monster';
}
