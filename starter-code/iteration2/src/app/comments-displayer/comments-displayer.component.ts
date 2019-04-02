import { Component, OnInit } from '@angular/core';
import Comment from '../classes/Comment';

@Component({
  selector: 'app-comments-displayer',
  templateUrl: './comments-displayer.component.html',
  styleUrls: ['./comments-displayer.component.scss']
})
export class CommentsDisplayerComponent implements OnInit {
  comments: Array<Comment> = [
    new Comment('Javi Aceña', new Date(), 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, exercitationem?'),
    new Comment('Dani Vicario', new Date(), 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt modi, labore co nemo!'),
    new Comment('Jesus Sanz', new Date(), 'Que te peines!')
  ];
  ngOnInit() {
  }

}
