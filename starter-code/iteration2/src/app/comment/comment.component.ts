import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  content: Array<Object> =[{
    username: "carlos",
    date: "01/02/1999",
    description: "CHAMBEAAAAA!!!!"
  },{
    username: "charlie",
    date: "03/02/2018",
    description: "Si lees esto es que voy ya por la mitad del ejercicio. SIIIIIIIIIUMMM!"
  },{
    username: "xarlie",
    date: "10/07/2036",
    description: "Me la juego con un tercer comment."
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
