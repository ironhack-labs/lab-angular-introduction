import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title: string = "2nd iteraction";
  image: string = "http://static.rogerebert.com/uploads/movie/movie_poster/duck-soup-1933/large_bFxealD6vcYr4sPOrJF0pvZ95ff.jpg";
  description: string = "Duck Soup";
  constructor() { }

  ngOnInit() {
  }

}
