import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title: string = 'Main Blog';
  image: string = 'https://media.giphy.com/media/B0vFTrb0ZGDf2/giphy.gif';
  description: string = 'this is a descripton';

}
