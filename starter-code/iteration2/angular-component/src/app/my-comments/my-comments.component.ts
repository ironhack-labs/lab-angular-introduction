import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comments',
  templateUrl: './my-comments.component.html',
  styleUrls: ['./my-comments.component.css']
})
export class MyCommentsComponent implements OnInit {
  title = `Comments`;
  user1 = `Brian`;
  user2 = `Pat casey`;
  comment1 = `Ironhack is epic!!!`;
  comment2 = `Man this bootcamp look like amazing!!`;
  constructor() { }

  ngOnInit() {
  }

}
