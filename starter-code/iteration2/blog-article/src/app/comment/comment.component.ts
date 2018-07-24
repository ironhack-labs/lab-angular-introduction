import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  title = 'hola';
  comments = [
    {name: 'Harry Potter', description: 'His duobus, sicariorum. Et orci aetate erat, sed nescio quo modo se gerendo levir meus'}, 
  {name: 'Dumbledore', description:'Uno ictu cruentus ille utrimque - statuit American Mexicanus gubernationes contra'}, 
  {name: 'Hermione', description: 'Sumus tam adultis.Non est enim tibi nescio fingunt. Confusio esse cupio. Scio te debe'}];

  constructor() { }

  ngOnInit() {
  }

}
