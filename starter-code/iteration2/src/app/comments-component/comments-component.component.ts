import { Component } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.sass']
})
export class CommentsComponentComponent {
  title: string;
  comments: Array<object>;

  constructor() { 
    this.title = 'Comments';
    this.comments = [
      {
        id: 1,
        name: 'Zenchy',
        date: new Date,
        description: 'Te voy a dar besos hasta que te guste'
      }, {
        id: 2,
        name: 'David',
        date: new Date(),
        description: 'Que te peines!'
      }
    ];
    
  }

}
