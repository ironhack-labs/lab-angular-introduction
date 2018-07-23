import { Component } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent {
title = "Comments";
comments: Array<Object> = [{
  name: 'JuanMa', comment: 'La pasé en IH DPM', date: new Date() },
  {name: 'Concepción', comment: 'Que gente tan amable!', date: new Date()},
  {name: 'Daniel', comment: 'Creo que le vendría bien más torneos de kata!', date: new Date()}
];
}
class Comment {
  name: string;
  comment: string;
  date: Date;
}

