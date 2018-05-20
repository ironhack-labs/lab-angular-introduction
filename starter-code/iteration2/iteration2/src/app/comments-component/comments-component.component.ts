import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  author = ['Pablo', 'Amelia'];
  date = [new Date(2005, 1, 4), new Date(2015, 1, 4)];
  comment = ['asdfasdfasdfasdf', 'asdfasdfasdfasdfasdfafdd33'];

  ngOnInit() {
  }

}
