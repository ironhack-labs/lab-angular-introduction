import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
dashboard = [new Dashboard(new Date(), 'JohnyWalker', '#', ['Angel', 'Floki', 'Clementina', 'Pablo']),
 new Dashboard(new Date(), 'Manolo', '#', ['Angel2', 'Floki2', 'Clementina2', 'Pablo2']),
 new Dashboard(new Date(), 'Pepelu', '#', ['Angel3', 'Floki3', 'Clementina3', 'Pablo3'])];

  constructor() { }

  ngOnInit() {
  }

}

class Dashboard{
constructor(public year: Date, public champion: String, public championUrl: String, public bestPlayers: Array<String>){}
}
