import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent implements OnInit {
  nba : any = [
    {year:"2017", champion:"San Francisco", champion_url:"https://lh4.googleusercontent.com/-kdzsktQIjDk/AAAAAAAAAAI/AAAAAAAAZf4/bJr3hnWWLq4/s0-c-k-no-ns/photo.jpg", best_players:["Tim Howard", "Josh Nashville", "Tom Jones", "Peter Pan", "Tom Robbins"]},
    {year:"2016", champion:"Boston Celtics", champion_url:"http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/bos.png", best_players:["Tim Next", "Tom Happen", "John Snow", "Peter Parker", "Josh New"]},
    {year:"2015", champion:"Chicago Bulls", champion_url:"https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png", best_players:["Samuel Jackson", "Harry Stan", "Josh Curry", "Paul Truman", "Marc Thomas"]},
  ]
  constructor() { }

  ngOnInit() {
  }

}
