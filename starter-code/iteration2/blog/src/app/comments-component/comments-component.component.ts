import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  constructor() {}

  user: String = 'Alex';
  date: Date = new Date();
  comment: String = 'Qué bonito';

  ngOnInit() {}
}
