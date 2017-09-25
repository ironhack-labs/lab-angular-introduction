import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments = [
    {name: 'Phillly', comment: 'I <3 angular'},
    {name: 'Byron', comment: 'Yo meng'},
    {name: 'Tania', comment: 'Its jog time!'}
  ]

  newCommentName: string = 'Random';
  newCommentDescription: string = 'Random';
  addComment() {
    this.comments.push({name: this.newCommentName, comment: this.newCommentDescription});
  }

  constructor() {}

  ngOnInit() {
  }

}
