import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
    commetTitle:string= "Comment: ";
    comments=[{name:"Pedro", comment:"Que rico"}];
  constructor() {

   }


  ngOnInit() {
  }

  getvalues(name: String, comment: String){
    this.comments.push({ name, comment });
  }

}
