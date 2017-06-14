import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor() {
  var comments: string[] = ['this is one comment', 'this is another comment'];
}

  ngOnInit() {
  }

}
