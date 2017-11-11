import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css'],
})
export class CommentsComponentComponent implements OnInit {

  title = 'Comments';
  firstCommentName: string = 'Francesca';
  firstComment: string = 'I went to Toronto this Summer. Absolutely lovely. Highly recommend it!';
  secondCommentName: string = 'Michael';
  secondComment: string = 'Meh. Imagine New York City, but cleaner.';

  constructor() { }

  ngOnInit() {
  }

}
