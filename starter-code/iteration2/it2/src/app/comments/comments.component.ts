import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent{
  title:string = 'Comments'
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



}
