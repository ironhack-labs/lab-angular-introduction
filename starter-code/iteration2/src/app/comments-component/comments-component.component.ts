import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
comment = 'Comentarios';
comments = [{
  name: 'Angel',
  date: '1/1/2001',
  text: 'Random comentary',
}, {
  name: 'PepeLu',
  date: '2/1/2001',
  text: 'Another random comentary',
}]
}
