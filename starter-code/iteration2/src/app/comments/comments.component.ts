import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
title = 'Comments';
  comments = [
    {
      comment: 'Me flipa esa ciudad',
      name: "Juana"
    },
    {
      comment: 'Pues yo fui de tapas y solo habia fritanga',
      name: "Luisito"
    }];

}


