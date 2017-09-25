import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
    comentario: Array<Object> = [
      {name: "Muchachito Alegre",
       question: "Cuantas manzanas hacen falta para conseguir hacer a un grillo cantar?"
     }
   ];



  constructor() {
  }

  ngOnInit() {
  }

  a(name: String, question: String){
    this.comentario.push({name, question});
  }

}
