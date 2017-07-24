import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration2b',
  templateUrl: './iteration2b.component.html',
  styleUrls: ['./iteration2b.component.css']
})
export class Iteration2bComponent implements OnInit {
comments: Array <Object>= [
  {
    title : 'Comentario1',
    author: 'hey',
    content : 'hey hey'
  },
  {
    title : 'Comentario2',
    author: 'hey2',
    content : 'hey hey hey hey '
  },
  {
    title : 'Comentario1',
    author: 'hey3',
    content : 'hey hey hey'
  }
]
  constructor() { }

  ngOnInit() {
  }

}
