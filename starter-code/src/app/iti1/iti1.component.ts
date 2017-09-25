import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iti1',
  templateUrl: './iti1.component.html',
  styleUrls: ['./iti1.component.css']
})
export class Iti1Component implements OnInit {
  height = 200;

    img = [{
      url : 'https://www.thefamouspeople.com/profiles/images/homer.jpg',
      title : 'mirale! mirale!'
    },
    {
      url : 'http://cdn.memegenerator.es/descargar/1791516',
      title : 'pero esto que eeees!'
    },
    {
      url : 'https://em.wattpad.com/52c4619730ab9b6a5b5145fdd4f7d92b9e17fa22/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f53683133686b31327a3253445f513d3d2d3235353932393432302e313434643861343564333339613735372e6a7067?s=fit&w=1280&h=1280',
      title : 'vecinitos'
    }]



  constructor() { }

  ngOnInit() {
  }

}
