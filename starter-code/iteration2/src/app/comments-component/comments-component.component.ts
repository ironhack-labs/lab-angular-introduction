import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  comments = ["Excelente plan de fin de semana.","Paseo por el campo y baño refrescate, ¿que mas se puede pedir?.","Una paisaje precioso, muy recomendable."]

  constructor() { }

  ngOnInit() {
  }

}
