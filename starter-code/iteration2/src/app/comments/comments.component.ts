import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent  {
  @Input() comments: Array<{name: string, description: string}>;

  newCommentName: string = '';
  newCommentDescription: string = '';

  addComment() {
    this.comments.push({name: this.newCommentName, description: this.newCommentDescription});
    this.newCommentName = "";
    this.newCommentDescription = ""
  }

}
