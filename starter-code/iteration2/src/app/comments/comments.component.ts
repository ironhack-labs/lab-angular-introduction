import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comments-component',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Array<Comment> = [
    new Comment(
      'Jahson', 
      formatDate(new Date('April 6, 2018 03:24:00')), 
      'BB Seaton for ever :)'
    ),
    new Comment(
      'Tonto', 
      formatDate(new Date('February 13, 2018 19:47:00')), 
      'Greatest vocal group of all times!'
    ),
    new Comment(
      'Nyah Man', 
      formatDate(new Date('January 15, 2018 09:12:00')), 
      'I love the reggae is my favourite tune from them.'
    )
  ];


  constructor() { }

  ngOnInit() {
  }

}

class Comment {
  constructor(
    public author: string,
    public date: string,
    public text: string
  ) { }
}

function formatDate(date) {

  var day = date.getDate();
  if(day < 10) {
    day = "0" + day;
  }
  var monthIndex = date.getMonth();
  var month = monthIndex + 1;
  if(month < 10) {
    month = "0" + month;
  }
  var year = date.getFullYear();
  var hour = date.getHours();
  if(hour < 10) {
    hour = "0" + hour;
  }
  var minutes = date.getMinutes();
  if(minutes < 10) {
    minutes = "0" + minutes;
  }

  return day + '/' + month + '/' + year + ' - ' + hour + ':' + minutes;
}