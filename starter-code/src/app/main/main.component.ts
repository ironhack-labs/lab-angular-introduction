import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title: string = "2nd iteraction";
  image: string = "http://static.rogerebert.com/uploads/movie/movie_poster/duck-soup-1933/large_bFxealD6vcYr4sPOrJF0pvZ95ff.jpg";
  description: string = "Duck Soup: The wealthy Mrs. Teasdale (Margaret Dumont) insists that Rufus T. Firefly (Groucho) be appointed leader of the small, bankrupt country of Freedonia before she will continue to provide much-needed financial aid. Meanwhile, neighboring Sylvania is attempting to annex the country. Sylvanian ambassador Trentino (Louis Calhern) tries to foment a revolution and to woo Mrs. Teasdale, and he tries to dig up dirt on Firefly by sending in spies Chicolini (Chico) and Pinky (Harpo).";
  constructor() { }

  ngOnInit() {
  }

}
