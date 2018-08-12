import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  comments: Array<Object> = [
    {name: 'John', updatedAt: new Date(), text: 'yo me ire a Marte con SpaceX :'},
    {name: 'Pepito', updatedAt: new Date(), text: 'sdfghjklhgfgh'},
    {name: 'Juanito', updatedAt: new Date(), text: 'ghghfhdfhdfgnfgncbcvxb'}
  ];
}
