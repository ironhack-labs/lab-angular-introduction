import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  section = "COMMENTS:"
  title1 = "DragonSlayer78 says:"
  text1 = "Awww, I was hoping to see a description :'(" 
  title2 = "WeirdBird says:"
  text2 = "cute picture lol" 
  section2 = "Send us a comment:"

  constructor() { }

  ngOnInit() {
  }

}
