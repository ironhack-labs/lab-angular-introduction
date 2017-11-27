import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent {
  user1: string = "Harry";
  user1Comment: string = "I'm just Harry";

  user2: string = "Hagrid";
  user2Comment: string = "you're a fucking wizard Harry";

}
