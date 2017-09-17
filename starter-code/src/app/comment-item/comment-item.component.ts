import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {
  @Input() comment: any;
 

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: comment-item component');
  }

  ngOnChanges(change) {
    console.log('ngOnChanges: comment-item component', change);
  }
  
}
