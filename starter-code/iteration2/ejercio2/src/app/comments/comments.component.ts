import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  formcomments:object = {
    name: "",
    description: "",
  };
  comments:Array<object> = [{
    name: "Seb",
    description: "Primer Comentario",
    date: "19/02/2018"
  },
  {
    name: "Paola",
    description: "Segundo Comentario",
    date: "18/02/2018"
  },
  {
    name: "Mateo",
    description: "Tercer Comentario",
    date: "17/102/2018"
  }];


  constructor() { }

  ngOnInit() {
  }

}
