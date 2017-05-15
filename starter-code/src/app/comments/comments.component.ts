import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  user: string = "Carlos"
  comment: string = "Estos perros están muy gordos"
  constructor() { }

  ngOnInit() {
  }

}
