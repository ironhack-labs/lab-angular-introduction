import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  title:   string = 'Learn how the code with Ironhack';
  content: string = 'Donec vel magna mauris. Maecenas ut erat at elit elementum vehicula. Nunc finibus augue sit amet ipsum cursus luctus ac ultrices velit. Sed posuere venenatis fermentum. Aenean in vestibulum ante. Donec vitae est in libero ullamcorper scelerisque non a est. Vivamus cursus pulvinar quam sit amet posuere.';
  image: string = 'https://www.w3schools.com/css/img_fjords.jpg'

  constructor() { }

  ngOnInit() {
  }

}
