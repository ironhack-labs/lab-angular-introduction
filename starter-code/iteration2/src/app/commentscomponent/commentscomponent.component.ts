import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentscomponent',
  templateUrl: './commentscomponent.component.html',
  styleUrls: ['./commentscomponent.component.css']
})
export class CommentscomponentComponent implements OnInit {

  comments: Array<Object> = [
    {
      author: 'Author',
      date: '06-10-1992',
      content: 'Lorem fistrum ese pedazo de mamaar condemor jarl hasta luego Lucas fistro se calle ustée te va a hasé pupitaa. Amatomaa tiene musho peligro la caidita qué dise usteer jarl a gramenawer te va a hasé pupitaa sexuarl ese hombree. '
    },{
      author: 'Author',
      date: '06-10-1992',
      content: 'Lorem fistrum ese pedazo de mamaar condemor jarl hasta luego Lucas fistro se calle ustée te va a hasé pupitaa. Amatomaa tiene musho peligro la caidita qué dise usteer jarl a gramenawer te va a hasé pupitaa sexuarl ese hombree. '
    },{
      author: 'Author',
      date: '06-10-1992',
      content: 'Lorem fistrum ese pedazo de mamaar condemor jarl hasta luego Lucas fistro se calle ustée te va a hasé pupitaa. Amatomaa tiene musho peligro la caidita qué dise usteer jarl a gramenawer te va a hasé pupitaa sexuarl ese hombree. '
    },{
      author: 'Author',
      date: '06-10-1992',
      content: 'Lorem fistrum ese pedazo de mamaar condemor jarl hasta luego Lucas fistro se calle ustée te va a hasé pupitaa. Amatomaa tiene musho peligro la caidita qué dise usteer jarl a gramenawer te va a hasé pupitaa sexuarl ese hombree. '
    },{
      author: 'Author',
      date: '06-10-1992',
      content: 'Lorem fistrum ese pedazo de mamaar condemor jarl hasta luego Lucas fistro se calle ustée te va a hasé pupitaa. Amatomaa tiene musho peligro la caidita qué dise usteer jarl a gramenawer te va a hasé pupitaa sexuarl ese hombree. '
    },{
      author: 'Author',
      date: '06-10-1992',
      content: 'Lorem fistrum ese pedazo de mamaar condemor jarl hasta luego Lucas fistro se calle ustée te va a hasé pupitaa. Amatomaa tiene musho peligro la caidita qué dise usteer jarl a gramenawer te va a hasé pupitaa sexuarl ese hombree. '
    }];


  constructor() { }

  ngOnInit() {
  }

}
