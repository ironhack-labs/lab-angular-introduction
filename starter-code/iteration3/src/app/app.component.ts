import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Championships:Array<object> = [
    {
      year:"2015-16",
      champion: "Cleveland Cavaliers",
      championUrl: "http://www.trbimg.com/img-5848573d/turbine/sfl-miami-heat-cleveland-cavaliers-preview-120816"
    },
    {
      year:"2014-15",
      champion: "Golden State Warriors",
      championUrl: "http://nba.frgimages.com/FFImage/thumb.aspx?i=/productimages/_491000/altimages/FF_491928ALT4_full.jpg&w=600"
    },
    {
      year:"2013-14",
      champion: "San Antonio Spurs",
      championUrl: "http://cdn.bleacherreport.net/images/team_logos/328x328/san_antonio_spurs.png",
    },
  ]
}
