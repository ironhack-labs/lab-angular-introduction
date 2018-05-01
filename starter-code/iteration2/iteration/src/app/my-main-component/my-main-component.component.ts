import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-main-component',
  templateUrl: './my-main-component.component.html',
  styleUrls: ['./my-main-component.component.css']
})
export class MyMainComponentComponent implements OnInit {
  title = "Cheese and Baguettes";
  image = "https://ayusastudyabroadmariafrance.files.wordpress.com/2011/11/baguette-and-cheese-on-white-background.jpg";
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  constructor() { }

  ngOnInit() {
  }

}

