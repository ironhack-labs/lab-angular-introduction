import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  userComment = [
    {user:'carmen',date:new Date(),text:"hjsdhjasdghjasgdjsadgjsa"},
    {name:'pepe',date:new Date(), text:"dsddsdsdsd"},
    {name:'dunnia',date: new Date(),text:"dhejdheghdhjegdjegdje"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
