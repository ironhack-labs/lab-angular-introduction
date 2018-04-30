import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  title = "Comments";
  user1 = "Pepe";
  user2 = "Ironhack";
  comment1 = "¿Cuánto vale ésto?";
  comment2 = "Más de lo que te puedes permitir";


  constructor() { }

  ngOnInit() {
  }

}
