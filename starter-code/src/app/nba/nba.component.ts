import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent implements OnInit {
  title = "Cleveland Cavaliers"
  year = "2015-2016"
  src = "http://www.elpoderdelasideas.com/wp-content/uploads/nuevo-antes-despues-logo-cleveland-cavaliers2.png";
  description = "Best player"

  title2 = "Golden State Warriors"
  year2 = "2014-2018"
  src2 = "https://seeklogo.com/images/G/golden-state-warriors-logo-C4106147E7-seeklogo.com.png";
  description2 = "Best player"



  constructor() { }

  ngOnInit() {
  }

}
