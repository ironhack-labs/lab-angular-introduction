import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
Comments: Array<Object>= [
{name:  'Pablo',
date: '25/12/2015',
comment: 'A mi me gusta mucho'},
{name:  'Juan',
date: '23/2/2016',
comment: 'Y a mi '},
{name:  'Laura',
date: '25/2/2016',
comment: 'Pues a mi no '}
];


  constructor() { }

  ngOnInit() {
  }
  getComents(name: String, comment: String ) {

    this.Comments.push({name, comment} );
  }
  
  
}
