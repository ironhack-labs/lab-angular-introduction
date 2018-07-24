import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  username:string = 'blah'

  comments:Array<any> = [
    {
    author:     'Sandra',
    content:    'Can someone please teach me .populate ??',
    date:       Date
    },
    {
    author:     'Ali',
    content:    'Sure. $50 for my seminar.',
    date:       Date
    }
    ];

    addComment(author,comment){
    
    this.comments.push({

      author:   author.value,
      content:  comment.value,
      date:     Date

    })
    
      console.log(author.value,comment.value);
  }

  
  
  constructor() { }

  ngOnInit() {
  }

}
