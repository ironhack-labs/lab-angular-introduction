import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
title:string = 'Comments'
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


}
