import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent {
  comments: Array<Object> = [
    {
      name: 'Carlos Galindos',
      description: 'Esta moto marcó una poca. Mi abuelo dormía con una.',
      createdAt: new Date(),
    }, {
      name: 'Pablo Ontorio',
      description: 'El mío también dormía con ella a menudo.',
      createdAt: new Date(),
    }
  ];
};
