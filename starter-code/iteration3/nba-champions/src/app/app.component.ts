import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nbaData: Array<object> = [
    {
      year: "2014-2015",
      champion: "San Antonio Spurs",
      championURL: "https://seeklogo.com/images/S/san-antonio-spurs-logo-344629EB43-seeklogo.com.png",
      bestPlayers: ["Tim Duncan","Tony Parker","Manu Ginobili","Kawhi Leonard","Tiago Splitter"]
    },
    {
      year: "2014-2015",
      champion: "Golden State Warriors",
      championURL: "https://images.vexels.com/media/users/3/130643/isolated/preview/c1af6c8c2a4d1df1456fd8d034d697b7-golden-states-warriors-logo-by-vexels.png",
      bestPlayers: ["Stephen Curry","Clay Thompson","Draymong Green","Andrew Bogut","Gestus Ezeli"]
    },
    {
      year: "2015-2016",
      champion: "Cleveland Cavaliers",
      championURL: "https://www.tipsbetting.co.uk/wp-content/uploads/2018/02/Cleveland-Cavaliers.png",
      bestPlayers: ["Lebron James","Kyrie Irving","Kevin Love","JR Smith","Anderson Varejao"]
    }
  ]
}
