import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  title = 'Título del artículo';
  image = 'https://granviacapital.es/wp-content/uploads/2016/02/apartamentos-uso-turistico.jpg';
  description = 'Lorem fistrum pupita me cago en tus muelas sexuarl tiene musho peligro te va a hasé pupitaa la caidita ese hombree.';

  constructor() {}
  ngOnInit() {}
}
