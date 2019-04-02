import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {

  @Input() author: string;
  @Input() dateTime: Date;
  @Input() comment: string;

  constructor() { }

  ngOnInit() {
  }

}
