import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class nbaDashboard {
  champions: Array<any> = [{
      year: "2015-16",
      teamName:"Cleveland Cavaliers",
      logoUrl:"",
      bestPlayers:["Lebron James","Kyrie Irving","Kevin Love","J.R. Smith","Anderson Varejao"]
    },{
      year: "2014-15",
      teamName:"Golden State Warriors",
      logoUrl:"",
      bestPlayers:["Stephen Curry","Klay Thompson","Draymong Green","Andrew Bogut","Gestus Ezeli"]
    },{
      year: "2013-14",
      teamName:"San Antonio Spurs",
      logoUrl:"",
      bestPlayers:["Tim Duncan","Tony Parker","Manu Ginóbili","Kawhi Leonard","Tiago Splitter"]
    }
  ]
}
