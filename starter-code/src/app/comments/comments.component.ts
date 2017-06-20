import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  model = new Comment("Name", "Write a comment","posted");
  submitted = false;
  comments = [];
  postedDate = Date.now();

onSubmit(forminfo) {
  this.submitted = true;
  console.log(forminfo);
  let newComment = new Comment(forminfo.name, forminfo.comment, this.postedDate);
  this.comments.push(newComment);
}

newComment() {
  this.model = new Comment("Enter Name", 'Enter Comment', "now");
}

}

class Comment {

constructor(public name: string, public comment: string, public posted: any) { }

}
