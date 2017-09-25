import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'app';
  champsArr: any = [
    {year: "2015-2016", name: "Cleveland Cavaliers", champion_url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Cleveland_Cavaliers_logo.svg/150px-Cleveland_Cavaliers_logo.svg.png", best_players: ["Lebron James","Kyrie Irving","Kevin Love","JR SMith","Andersaon Varejao"]},
    {year: "2014-2015", name: "GOlden State wARriors", champion_url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/300px-Golden_State_Warriors_logo.svg.png", best_players: ["Stephen SmellyCurry","Kiay Thompson","Draymong Green","Andrew Bogut","Gestus Ezelio"]},
    {year: "2013-2014", name: "San Antonio Spurs", champion_url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/300px-San_Antonio_Spurs.svg.png", best_players: ["Tim Bear","Tony Parker","Mamu Goinmsdoib","Lawjhoi :epwodm","Tigao Spitter"]}
  ]
}
