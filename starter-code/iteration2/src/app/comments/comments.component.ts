import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  constructor() {}
  title = 'Comments';
  comments = [
    { poster: 'Paco', text: 'Muy bien' },
    { poster: 'Alfredo', text: 'Muy bien' },
    { poster: 'Miguel', text: 'Muy bien' }
  ];
  ngOnInit() {}
}
