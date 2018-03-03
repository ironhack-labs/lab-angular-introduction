import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  author:Array<string> = ['Amelia','Pablo'];
  date:Array<string> = ['01/02/2018','02/03/2017'];
  comment:Array<string> = ['Hola soy Amelia! Me molan los coches','Hola soy Pablo, y me mola Goiko'];

  constructor() { }

  ngOnInit() {
  }

}
