import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  comments : Array<Comment> =[new Comment("primer User",new Date(),"Primer Comentario"),
  new Comment("segundo User",new Date(),"Segundo Comentario")];

  constructor() {}
  ngOnInit() { }

}

class Comment {
  constructor(public user: String, public updateAt: Date, public comment: String){}
}
