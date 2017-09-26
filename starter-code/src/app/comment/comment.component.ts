import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
    commetTitle:string= "Comment: ";
    comments=[{name:String, comment:String}];
  constructor() {

   }


  ngOnInit() {
  }

  getvalues(myForm){
    console.log("a")
    this.comments.push({ name: myForm.name, comment: myForm.comment });
  }


}
