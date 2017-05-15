import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  article: string = "Here is the article. What do you think?"
  constructor() { }

  ngOnInit() {
  }

}
