import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent{
  title:string = 'Comments'

  username:string = "stock username"

  
  arrayOfComments: Array<any> = [
    {
      reviewer: ' Boom Boom',
      review: 'things go Kaboom'
    },
    {
      reviewer: 'Lux',
      review: 'tasteful'
    }
  ]
  addComment(author, comment){
    console.log(author.value,comment.value);
    this.arrayOfComments.push({
      reviewer:author.value,
      review:comment.value
    })
  }

  
}
