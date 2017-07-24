import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration1',
  templateUrl: './iteration1.component.html',
  styleUrls: ['./iteration1.component.css']
})
export class Iteration1Component implements OnInit {
  photos: Array <Object> =
  [
    {
      title : 'Foto1',
      url : 'http://startuc3m.com/wp-content/uploads/2015/10/ironhack_logonegro.png'
    },
    {
      title : 'Foto2',
      url : 'http://startuc3m.com/wp-content/uploads/2015/10/ironhack_logonegro.png'
    },
    {
      title : 'Foto3',
      url : 'http://startuc3m.com/wp-content/uploads/2015/10/ironhack_logonegro.png'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
