import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comments',
  templateUrl: './iteration-two.component.html',
  styleUrls: ['./iteration-two.component.css']
})
export class IterationTwoComponent implements OnInit {
  comments : Array<Comment> = [
    new Comment ( "Billy",  "Jb is the Best"), 
    new Comment ( "Jerem",  "Jb is awesome"), 
    new Comment ( "Samy ",  "Jb is like a father to me"), 
    new Comment ( "Lucas",  "Jb save my life 4 times"), 
    new Comment ( "Vivian",  "Jb is like my Sensei") 
   ];
  constructor() { }

  ngOnInit() {
  }

}
class Comment {
  constructor (
    public name : string,
    public desc : string
  ){ }
}
