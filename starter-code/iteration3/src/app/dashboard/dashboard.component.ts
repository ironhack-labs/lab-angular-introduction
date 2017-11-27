import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboard: Array<Dashboard>= [new Dashboard(new Date(),"Cleveland","http://media.cleveland.com/cavs_impact/photo/cavaliers-logojpg-a5573f508014d9aa_small.jpg",["1","2","3"]),
             new Dashboard(new Date(),"Warriors","http://1.bp.blogspot.com/-p9rKsv3kPKM/VCgVOu5ayrI/AAAAAAAAFDc/niSaiuT940U/s1600/Logo%2BGolden%2BState%2BWarriors.png",["4","5","6"]),
             new Dashboard(new Date(),"Spurs","http://ww3.hdnux.com/photos/41/05/33/8672978/3/rawImage.png",["7","8","9"])];
  constructor() { }
  ngOnInit() {
  }

}

class Dashboard{
  constructor(public year: Date, public champion: String, public champUrl: String, public bestPayer : Array<String> ){}
};
