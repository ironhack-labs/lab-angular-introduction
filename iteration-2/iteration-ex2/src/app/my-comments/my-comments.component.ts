import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comments',
  templateUrl: './my-comments.component.html',
  styleUrls: ['./my-comments.component.css']
})
export class MyCommentsComponent implements OnInit {
  comment1: string;
  comment2: string;
  comment3: string;


  ngOnInit() {
    this.makeComments();
  }

  makeComments():void{
    this.comment1 = "Muy bueno";
    this.comment2 = "Rebuenísimo";
    this.comment3 = "Caramba";
  }

}
