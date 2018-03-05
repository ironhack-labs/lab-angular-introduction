import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-nested',
  templateUrl: './my-nested.component.html',
  styleUrls: ['./my-nested.component.css']
})
export class MyNestedComponent implements OnInit {
  comments: Array<Object>;
  title = 'Blog & Comments';
  article: { title: string; url: string; desc: string };
  constructor() {
    this.comments = [
      {
        madeBy: 'Ursula Minor',
        comment: ' very nice ',
        publishedAt: Date()
      },
      {
        madeBy: 'Arano Minor',
        comment: ' So nice ',
        publishedAt: Date()
      }
    ];
    this.article = {
      title: 'Whatever you want',
      url: './assets/photos/sheep.jpg',
      desc: 'Very nice again'
    };
  }

  ngOnInit() {}
}
