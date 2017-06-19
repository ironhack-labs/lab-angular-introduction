import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

model = new Comment("Bob Boberton",
                              "I don't like this article",
                              "posted");


}

class Comment {

constructor(public name: string, public comment: string, public posted: string) { }

}
