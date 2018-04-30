import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
championships: Array<Object> =[{
  year: "2015-16",
  nameChampion: "Cleveland Cavaliers",
  championurl:"http://www.elpoderdelasideas.com/wp-content/uploads/cavaliers-logo-detalles-1.png",
  bestplayers:["Lebron James, Irving, Love,J.R.Smith,Varejao"],
},
{
  year : "2014-15",
  nameChampion : "Golden State Warriors",
  championurl:"https://i.pinimg.com/originals/79/f8/5e/79f85e4db847da8f8a5150afa0a5d850.png",
  bestplayers:["Curry, Thompsons, Green,Bought,Ezeli"],

},
{
  year : "2013-14",
  nameChampion : "San Antonio Spurs",
  championurl:"https://images-na.ssl-images-amazon.com/images/I/71hAbYrepbL._SL1500_.jpg",
  bestplayers:["Duncan, Parker, Ginobilli,Leonard,Splitter"],
}];
  

  constructor() { }

  ngOnInit() {
  }

}
