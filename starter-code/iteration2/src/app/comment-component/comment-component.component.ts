import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment-component.component.html',
  styleUrls: ['./comment-component.component.css']
})

export class CommentComponentComponent {
  comments: Array<Comment> = [
    new Comment('Manu',new Date(),'Bellisima la serie, me encanto'),
    new Comment('Alberto',new Date(),'Joder menudo crack'),
    new Comment('Marc',new Date(),'Me la apunto'),
    new Comment('Andrei',new Date(),'Chicuelos que gran serie')
  ];
}

class Comment {
  constructor(
    public creator:string,
    public date:Date,
    public content:string,
  ){}
}
