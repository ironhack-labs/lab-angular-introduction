import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  MainComponent = {title:"Los famosos escargots de Mateo",img:"https://assets.epicurious.com/photos/57a8adfbb10b4fb03f234f37/2:1/w_1260%2Ch_630/escargots-a-la-bourguignonne.jpg",description:"Dip it with bread my bro"}
  constructor() { }

  ngOnInit() {
  }

}
