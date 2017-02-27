import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor() { }
  comment1 = "Why are there not many women in tech? Is it to do with the traditionally male-dominated sphere of tech and the sciences.";
  comment2 = "Some say women are descended from Venus but really they created Mars";
  comment3 = "Women are iliterate and are not able to hold a thought and write at the same time";
  ngOnInit() {

  }

}
