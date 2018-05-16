import { Component, OnInit } from '@angular/core';
import { ADDRGETNETWORKPARAMS } from 'dns';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  //Adding comments section 
  comments:Array<any> = [
    {title: "Great Article", content:" blah blah"},
    {title: "Great Article", content:" blah blah"},
    {title: "Great Article", content:" blah blah"}
  ]

addNew():void{
  const newOne= {title: this.newComment.title, content: this.newComment.content}
  this.comments.push(newOne);
}

// Creates object to add comments to page
  // createNewComment(titleArg:string, contentArg:string):void{
  //   const newComment = {title: titleArg, content: contentArg}
  //   this.comments.push(newComment)
  // }
  
  constructor() { }

  ngOnInit() {
  }

}
