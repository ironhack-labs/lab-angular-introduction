import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {
  title = 'Article';
  image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd643RVsAZuvPglbYlFI9uU8l5JW4jdYiRvpFmANG9vEixUG5d';
  description = `Un Locum tenens (en latín: "teniendo un lugar", o, "tenedor de una posición") es el estado de una persona
  que está temporalmente cumpliendo los deberes y responsabilidades de una oficina particular en ausencia de quien ha sido
  debidamente elegido para tal cargo o tiene esa oficina. Tal persona puede actuar como substituto o como diputado.
  Un médico que tiene que estar ausente de sus deberes puede tener un locum tenens disponible para cuidar a sus pacientes.
  Therus Kolff estableció el primer servicio para locum tenens médicos en el año 1979 CompHealth.`;

  constructor() { }

  ngOnInit() {
  }

}
