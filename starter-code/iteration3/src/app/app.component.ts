import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  championships = [{
    year: "2015- 16",
    champion: "Cleveland Cavaliers",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65GgyN81ifTeHj1vxKGhi5DXAnnSXyw1N-FjmLfNV3aeEDEoA",
    bestPlayers: ["Lebron James", "Kyrie Irving", "Kevin Love", "J. R. Smith", "Anderson Varejao"]
  },
  {
    year: "2014- 15",
    champion: "Golden State Warriors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9gwwKzlm8AdmGk97aORpVRNNkyBvB0Cpjvyz8tL9OcDdbZeaIg",
    bestPlayers: ["Stephen Curry", "Klay Thompson", "Draymong Green", "Andrew Bogut", "Gestus Ezeli"]
  },
  {
    year: "2013- 14",
    champion: "San Antonio Spurs",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCmWl0pTxjjFhH5EYOP2_mNwcw7G3b_tl9smS9ItrAhigCULa",
    bestPlayers: ["Tim Duncan", "Tony Parker", "Manu Ginobili", "Kawhi Leonard", "Tiago Splitter"]
  }]
}
