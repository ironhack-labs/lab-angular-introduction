import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  comments: Array<object> = [
    { username: 'Cris',
      createdAt: new Date(),
      comment: 'Opino que está fatal que hayan quitado carriles de la Gran Vía'
     },
     { username: 'Barb',
      createdAt: new Date(),
      comment: 'Me encanta la Gran Vía en navidades'
     }
    ]
  
  constructor() { }

  ngOnInit() {
  }

}
