import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  name1="Pedro"
  comment1="Me pica el brazo"
  name2="Luis"
  comment2="Me pica el pie"

  constructor() { }

  ngOnInit() {
  }

}
