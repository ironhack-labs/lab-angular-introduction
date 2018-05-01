import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  comments: Array<Object> = [
    {
      user: "Paco",
      opinion: "marvelous!!",
      date: "19/12/2018"

    }, {
      user: "Juan",
      opinion: "So creppy",
      date: "22/12/2018"

    }, {
      user: "Pedro",
      opinion: "Wonderful!!",
      date: "28/12/2018"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
