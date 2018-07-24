import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learnhow',
  templateUrl: './learnhow.component.html',
  styleUrls: ['./learnhow.component.css']
})
export class LearnhowComponent implements OnInit {
  title = "Learn how to code with IronHack"
  url = "https://regmedia.co.uk/2014/05/23/bart_simpson_teaser.jpg?x=442&y=293&crop=1"
  info = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  constructor() { }

  ngOnInit() {
  }

}
