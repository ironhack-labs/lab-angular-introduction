import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  title = 'Comments';
  titleLow = 'Comment1 that will be a variable';
  titleLow2 = 'Comment1 that will be a variable';
  text = 'anothertextrandom that will be a variable';


  constructor() { }

  ngOnInit() {
  }

}
