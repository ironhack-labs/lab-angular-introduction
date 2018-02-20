import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = "Learn how to code with IronHack";
  url_img = 'http://via.placeholder.com/650x350';
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam non quod totam quisquam assumenda necessitatibus, sint animi nostrum corrupti beatae a, accusamus minima voluptate provident laborum et autem excepturi sapiente.";

  constructor() { }

  ngOnInit() {
  }

}
