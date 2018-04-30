import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  allTeams: Array<object> = [
    new Team(
      "Boston Celtics",
      "2016-17",
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/200px-Boston_Celtics.svg.png",
      ["John Joseph",
       "Paul Anthony Pierce",
        "Larry Joe Bird",
         "Robert Parish", 
         "Kevin Edward McHale"]
    ),
    new Team(
      "Los Angeles Lakers",
      "2059-61",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/200px-Los_Angeles_Lakers_logo.svg.png",
      ["Kobe Bean Bryant",
       "Wilton Norman Chamberlain",
        "Somebody With A Name", 
        "Another Person",
         "I-don't Know-them"]
    ),
    new Team(
      "Chicago Bulls",
      "3015-3067",
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/200px-Chicago_Bulls_logo.svg.png",
      ["It Takes",
       "Too-Much Time",
        "To Find", 
        "Their Names", 
        "Last One"]
    )
  ];
}


class Team{
  constructor(
    public name: string,
    public years: string,
    public pictureUrl: string, 
    public players: Array<string>
  ){
  }
}