import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboard = [new Dashboard(new Date(), 'Angel', 'https://i0.wp.com/www.losreportesdelichi.com/site//site/wp-content/uploads/2017/10/obama.jpg?w=640', ['Pablo, Alberto, Angel']),
  new Dashboard(new Date(), 'Alejandro', 'https://i0.wp.com/www.losreportesdelichi.com/site//site/wp-content/uploads/2017/10/obama.jpg?w=640', ['Nadia, Alberto, Angel']),
  new Dashboard(new Date(), 'Alberto', 'https://i0.wp.com/www.losreportesdelichi.com/site//site/wp-content/uploads/2017/10/obama.jpg?w=640', ['Tess, Alberto, Angel'])]

  constructor() { }
  ngOnInit() {
  }
}

class Dashboard {
  constructor(public year: Date, public champion: String, public championUrl: Url, public bestPlayers:Array<String>){}
}
