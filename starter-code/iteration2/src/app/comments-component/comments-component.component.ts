import { Component } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.sass']
})
export class CommentsComponentComponent {
  title:string
  comments:Array<object>
  constructor() { 
    this.title = "Comments"
    this.comments =[
      {
        name:"Victor",
        date:"19/07/2018 23:59",
        comment:"best página ever"
      },
      {
        name:"Jesus",
        date:"20/07/2018 00:01",
        comment:"worst página ever"
      }]
  }

}
