import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Array<Object>;
  title = "Blog & Comments";
  article:{title: string, url: string, desc: string};
  constructor() {
    this.comments = [
      {
        madeBy: "Duffman",
        comment: "DUFFMAN SAYS, GAME IS O-KAY",
        publishedAt: Date()
      },
      {
        madeBy: "Oprah Winfrey",
        comment: "Ohh that feels good!",
        publishedAt: Date()
      }
    ];
    this.article = {
      title: "The man who lost his shoe",
      url: "http://c8.alamy.com/comp/BCKH5C/worn-out-tennis-shoes-BCKH5C.jpg",
      desc: "smelly shoes go missing in Manhattan"
    }

   }

  ngOnInit() {
  }

}
