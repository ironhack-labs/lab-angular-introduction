import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comment1 = 'Good job!';

  comment2 = 'Awesome';

  constructor() { }

  ngOnInit() {
  }

}
