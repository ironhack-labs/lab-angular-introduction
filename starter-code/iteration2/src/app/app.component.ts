import { Component, OnInit  } from '@angular/core';
import { Url } from 'url';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  title : string = 'foobar';
  image = './assets/images/1.jpg';
  comments =[
    new CommentsComponent('vlad', 'bla')
  ]
  
  constructor() {
  
   }
   
  ngOnInit() {
  }
}
