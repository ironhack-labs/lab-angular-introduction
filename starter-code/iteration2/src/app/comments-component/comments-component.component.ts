import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  title ="Comments"
  usertitle ="Bob"
  coments = "kalfshlkfsahlkfashsfal"
  inputTitle = "Add your comment"
  inputName = "Name"
  inputDescriptipon ="Description"
  constructor() { }

  ngOnInit() {
  }

}
