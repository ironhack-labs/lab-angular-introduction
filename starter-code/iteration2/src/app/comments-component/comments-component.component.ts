import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'article-comp',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  comments: Array<Comments> = [
    new Comments("MGad", "blah blah bkah bkah"),
    new Comments("Nizar", "blah blah bkah bkah"),
    new Comments("Arthur", "blah blah bkah bkah"),
    new Comments("Mike", "blah blah bkah bkah")
    
  
  ]

  constructor() { }

  ngOnInit() {
  }

}

class Comments {
  constructor(
    public username: string, 
    public comment: string
  ){}
}
