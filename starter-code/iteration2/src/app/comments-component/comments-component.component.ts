import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

 comments: {title: string, date: string, content: string}[] = [
   {
     title: 'first comment',
     date: 'today',
     content: 'Hey Jude, refrain. Dont carry the world upon your shoulder'
   },
   {
    title: 'second comment',
    date: 'yesterday',
    content: 'Yesterday all my troubles seem so far away'
   }
 ];
  constructor() { }

  ngOnInit() {
  }

}
