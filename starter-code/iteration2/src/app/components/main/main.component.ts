import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Learn how to code with Ironhack';
  image = 'http://blog.ironhack.com/wp-content/uploads/2016/07/hectorges-31-1024x683.jpg';
  description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, recusandae laboriosam inventore facilis molestias quod nesciunt repellat delectus aspernatur quam adipisci quia ipsum ex totam ipsam corrupti quibusdam ut minima.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, recusandae laboriosam inventore facilis molestias quod nesciunt repellat delectus aspernatur quam adipisci quia ipsum ex totam ipsam corrupti quibusdam ut minima.';
  constructor() { }
  
  ngOnInit() {
  }

}
