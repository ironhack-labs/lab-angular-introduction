import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: Array<Object> = [
    {
      author: 'Rellenar',
      date: '20-02-2002',
      content: 'Lorem ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe'
    },{
      author: 'Rellenar',
      date: '20-02-2002',
      content: 'Lorem ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe'
    },{
      author: 'Rellenar',
      date: '20-02-2002',
      content: 'Lorem ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe'
    },{
      author: 'Rellenar',
      date: '20-02-2002',
      content: 'Lorem ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe'
    },{
      author: 'Rellenar',
      date: '20-02-2002',
      content: 'Lorem ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe'
    },{
      author: 'Rellenar',
      date: '20-02-2002',
      content: 'Lorem ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe ipsum doloe orem ipsum doloe vorem ipsum doloe orem ipsum doloe orem ipsum doloe orem ipsum doloe'
    }];


  constructor() { }

  ngOnInit() {
  }

}
