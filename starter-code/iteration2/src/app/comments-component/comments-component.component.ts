import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  comments=["make some sentadillas ","Dip it with bread my bro Alessandro"]
  constructor() { }

  ngOnInit() {
  }

}
