import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Array<Object>;
  title = "blog and comments";
  article: {title: string; url: string; desc: string};
  constructor() {
    this.comments = [
      {
        madeBy: "bob",
        comment: "sick dude",
        publishedAt: Date()
      },
      {
        madeBy: "bobby",
        comment: "sick dudicle",
        publishedAt: Date()
      }
    ];
    this.article = {
      title: "cool brah",
      url: "https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/H-P/Habitats/Ocean/wave.ngsversion.1500050062134.adapt.1900.1.jpg",
      desc: "dope"
    }
  }

  ngOnInit() {
  }

}
