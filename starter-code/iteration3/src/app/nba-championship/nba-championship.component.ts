import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-championship',
  templateUrl: './nba-championship.component.html',
  styleUrls: ['./nba-championship.component.css']
})
export class NbaChampionshipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  championship = [{
    name:"Cleveland Cavaliers",
    year:"2015-16",
    "champion-url":"http://as01.epimg.net/img/especiales/baloncesto/nba/escudos/cleveland_cavaliers.svg",
    "best-players":["Lebron James","Kyrie Irving","Kevin Love","J.R. Smith","Anderson Varejados"]
  },{
    name:"Golden State Warriors",
    year:"2014-15",
    "champion-url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0HT7ZaNlPnQxQlORQKFHxr9ccL4p4F34qhJRUJ-ipZCdwP5g",
    "best-players":["Stephen Curry","Klay Thompson","Draymong Green","Andrew Bogut","Gestus Ezeli"]
  },{
    name:"San Antonio Spurs",
    year:"2013-14",
    "champion-url":"http://cdn.bleacherreport.net/images/team_logos/328x328/san_antonio_spurs.png",
    "best-players":["Tim Duncan","Tony Parker","Manu Ginobili","Kawhi Leonard","Tiago Splitter"]
  }];
}
