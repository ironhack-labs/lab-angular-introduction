import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: { name: string, date: string, comment: string }[] = [
    {
      name: 'David',
      date: '27-Jan-2017',
      comment: 'This article ROCKS!'
    },
    {
      name: 'Julia',
      date: '29-Jan-2017',
      comment: 'Thanks for the Article!'
    },
    {
      name: 'Xaparafundipora',
      date: '31-Jan-2017',
      comment: 'This site has changed my life!'
    }
  ];

  constructor() {

   }

  ngOnInit() {

  }

}
