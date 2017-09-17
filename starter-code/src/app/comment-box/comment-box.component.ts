import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
  comments:any[] 
  newComment: Object = {};

  constructor() { }

  ngOnInit() {
    this.comments = [{
      id: 1,
      authorName: 'Pepito 1', 
      authorComment: 'Comentario 2' 
    }, 
    {
      id: 2,
      authorName: 'Loco 2',
      authorComment: 'Comentario 3'
    }
  ];
    
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: comment-box component');
  }
  
  addComment(newName, newComment) {
    this.comments.unshift(this.newComment);
    this.newComment = {};
    return false;
  }

}
