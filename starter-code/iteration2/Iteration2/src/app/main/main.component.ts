import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  MainContent = {
    title: 'Learn how to code with Ironhack',
    img : "https://i.gyazo.com/4c119afc34345e2f5ab54b4ff44f5163.jpg",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet eros neque. Integer ante elit, accumsan non pulvinar id, posuere at justo. Quisque eget ex ut tellus dapibus vulputate eu tincidunt sem. Vivamus ornare nibh non pellentesque bibendum. Aenean eros erat, varius ac dui nec, malesuada accumsan massa. In egestas vel quam sed vulputate. Proin aliquam viverra ultricies. Suspendisse ut metus cursus, pharetra ipsum ut, feugiat nisl. Donec tristique, lorem eget iaculis fermentum, augue nunc dapibus sem, ac pellentesque tortor neque eu urna. Quisque vehicula congue erat, ut facilisis ante mattis ut. Quisque laoreet faucibus sem, nec mollis nulla auctor at."
  }
  constructor() { }

  ngOnInit() {
  }

}
