import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-components',
  templateUrl: './comment-components.component.html',
  styleUrls: ['./comment-components.component.css']
})
export class CommentComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  comment = 'Comentarios';
  comments = [{
    name: 'Paco',
    date: '20/10/1990',
    text: 'Me gustan los políticos de hoy'
  },{
    name: 'Rodrigo',
    date: '20/12/1998',
    text: 'Odio los políticos'
  }]
}
