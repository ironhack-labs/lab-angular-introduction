import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  comments: Array<Object> = [
    {
      author: 'author',
      date: '21-02-1988',
      content: 'Lorem ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe'
    },{
      author: 'author',
      date: '21-02-1988',
      content: 'Lorem ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe'
    },{
      author: 'author',
      date: '21-02-1988',
      content: 'Lorem ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe'
    },{
      author: 'author',
      date: '21-02-1988',
      content: 'Lorem ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe'
    },{
      author: 'author',
      date: '21-02-1988',
      content: 'Lorem ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe'
    },{
      author: 'author',
      date: '21-02-1988',
      content: 'Lorem ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe'
    }];


  constructor() { }

  ngOnInit() {
  }

}
