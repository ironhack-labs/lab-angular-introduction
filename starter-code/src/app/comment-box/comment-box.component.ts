import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
  comment: Array<any> = [{
    name: 'Pepito 1', 
    comment: 'Comentario 2' 
  }, 
  {
    name: 'Loco 2',
    comment: 'Comentario 3'
  }
];

  constructor() { }

  ngOnInit() {
    
  }

}
