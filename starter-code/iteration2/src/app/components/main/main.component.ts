import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  articles: Array<Object> = [
    {
      path: 'http://www.tourist-destinations.net/wp-content/uploads/2013/09/Rio.jpg',
      title: 'Rio de Janeiro',
      description: 'The best of the best. Creme de la creme.'
    }
  ];
  constructor() { }

  ngOnInit() {

  }

}
