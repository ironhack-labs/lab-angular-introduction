import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Array<Object>;
  constructor() {
    this.comments = [
      {
      author: 'Bobby Tables',
      comment: 'Lorem itsum que yo que se que se yo no se de donde vengo ni a donde voy',
      publishedAt: Date()
    },
      {
      author: 'Ironhack',
      comment: 'Mi carro me lo robaron anoche cuando dormia',
      publishedAt: Date()
    }
  ];

  }

  ngOnInit() {
  }

}
