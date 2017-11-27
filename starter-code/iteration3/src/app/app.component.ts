import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  championship: Array<object> = [

    {date: "2015-2016",
    name: "Cleveland Cavaleres",
    img: "http://media.cleveland.com/startingblocks/photo/new-cavaliers-primary-logojpg-ecde4d110d8b58e4.jpg",
    title: "Best Players"
    },

    {
      date: "2014-2015",
      name: "Golden State Warriors",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/838px-Golden_State_Warriors_logo.svg.png",
      title: "Best Players"
    },
    {
      date: "2013-2014",
      name: "San Antonio Spurs",
      img: "http://ww3.hdnux.com/photos/41/05/33/8672978/3/rawImage.png",
      title: "Best Players"
    }
  ]

  bestPlayers: Array<object> = [
    {player1: "Lebron",
    player2: "Irvin",
    player3: "Kevin",
    player4: "Smith",
    player5: "Anderson"
    },
    {player1: "Curry",
    player2: "Thompson",
    player3: "Green",
    player4: "Bogut",
    player5: "Ezeli"
    },
    {player1: "Duncan",
    player2: "Parker",
    player3: "Ginobili",
    player4: "Leonard",
    player5: "Splitter"
    },
  ]
}
