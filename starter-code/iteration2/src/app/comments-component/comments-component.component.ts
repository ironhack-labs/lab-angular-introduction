import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 formComments = [{
   name: "Rocio",
   comment: "Gatetes a tope",
   dates: "21/04/2017 14:53"
 },{
   name: "Camila",
   comment: "I love gatetes",
   dates: "13/04/2017 14:00"
 },{
   name: "Fresi",
   comment: "I love a las que love gatetes",
   dates: "02/04/2017 14:53"
 }]
}
