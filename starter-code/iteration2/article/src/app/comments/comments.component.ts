import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments = 'Comments';
  addcomment = 'Add your comment';
  form = {
    name : '',
    description : ''
  }
  article = [{
  name : 'Paco Jones',
  date : '20/10/1975',
  comment : 'Un bonito día para ir a por amapolas al campo'
  },{
  name : 'Nuck Chorris',
  date : '20/10/1975',
  comment : 'Un bonito día para matar a Moe'
  }];

  constructor() { }

  ngOnInit() {
  }

}
