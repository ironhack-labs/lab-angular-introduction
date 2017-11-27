import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  championships = [
    {year:  "2017-2018",
    name: "Cleveland Cavaliers",
    url: "http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fcle.png",
    bestplayers: ["Juanito","Pepe","Carlitos"]
  },
  {name: "Golden State Warriors",
  url: "http://nba.frgimages.com/FFImage/thumb.aspx?i=/productimages/_491000/altimages/FF_491928ALT4_full.jpg&w=600",
  bestplayers: ["Juanito","Pepe","Carlitos"]
},
{name: "San Antonio Spurs",
url: "http://cdn.bleacherreport.net/images/team_logos/328x328/san_antonio_spurs.png",
}
];
bestplayers: ["Juanito","Pepe","Carlitos"]
}
