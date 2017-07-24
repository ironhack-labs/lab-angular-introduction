import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  user: string = "Tizio Caio";
  commentary: string = "Learning with Ironhack it's cool!"

  constructor() { }

  ngOnInit() {
  }

}
