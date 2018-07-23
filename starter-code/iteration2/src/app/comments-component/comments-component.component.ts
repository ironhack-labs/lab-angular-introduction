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
  comments= [{
    name: 'Gabi',
    content: 'I love it',
    date: '30/03/2017 - 19:30'
  }, {
    name: 'Giorgio',
    content: 'Bellisimo',
    date: '14/05/2018 - 3:40'
  }, {
    name: 'Beltrán',
    content: 'Amazing work!',
    date: '54/-01/1254 - 00:00'
  }]
}
