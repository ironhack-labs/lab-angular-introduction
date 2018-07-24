import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
title:string = 'Comments'

username:string = 'stock username'

arrayOfComments: Array<any> = [
  
{
  reviewer: 'The Hopeful',
  review: 'I am full of hope.'
}, {
  reviewer: 'The Dreaded',
  review: 'Needs more dread.'
}, {
  reviewer: 'The Virtuoso',
  review: 'I rehearsed this!'
}
]


addComment(author, comment){
 console.log(author.value, comment.value);
 this.arrayOfComments.push({
  reviewer: author.value,
  review: comment.value
 });
//  You have to BIND to an event defined in the same component..
}


}
