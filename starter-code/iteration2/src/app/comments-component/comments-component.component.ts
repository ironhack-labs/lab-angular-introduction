import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
    comments = [{
      description:"Lo mejor que he visto",
      date: "19/02/2018",
      name: "Juan Antonio"
    },
    {
      description:"Me recuerda mucho a Cervantes",
      date: "19/02/2018",
      name: "Maria Luisa"
    },
    {
      description:"Amazing",
      date: "19/02/2018",
      name: "Andy"
    }];
  constructor() { }

  ngOnInit() {
  }

}
