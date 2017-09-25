import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mononoke',
  templateUrl: './mononoke.component.html',
  styleUrls: ['./mononoke.component.css']
})
export class MononokeComponent implements OnInit {
  image = "http://i2.wp.com/screeningroomkingston.com/wp-content/uploads/2016/10/mononoke.jpg?fit=695%2C695";
  description = "mononoke princess with her wolf friend";
  constructor() { }
  ngOnInit() { }
}
