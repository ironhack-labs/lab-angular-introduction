import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor() { }

  components: Object {
    name: 'Whatever',
    img: 'https://www.spain.info/export/sites/spaininfo/comun/carrusel-recursos/cataluna/barcelona-000037111798-istock.jpg_369272544.jpg'
  };

  ngOnInit() {
  }

}
