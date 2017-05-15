import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  user: string = "Pepito Grillo"
  comment: string = "Noticia súper interesante"

  constructor() { }

  ngOnInit() {
  }

}
