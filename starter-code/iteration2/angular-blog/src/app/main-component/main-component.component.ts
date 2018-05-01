import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  name: String = 'Coliseo';
  image: String = "https://st-listas.20minutos.es/images/2014-10/388720/list_640px.jpg";
description:  String = "El Coliseo es un anfiteatro de la época del Imperio romano, construido en el siglo I d. C. y ubicado en el centro de la ciudad de Roma."
  constructor() { }

  ngOnInit() {
  }

}
