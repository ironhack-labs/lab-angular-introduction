import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  comments=[{
    description: "foto increible",
    date: "19/02/2018",
    name:"Manolito"
  },
  {
  description:"foto increible",
  date: "19/02/2018",
  name:"Manolito"
  },
  {
    description:"foto increible",
    date: "19/02/2018",
    name:"Manolito"

  }]

  constructor() { }

  ngOnInit() {
  }

}
