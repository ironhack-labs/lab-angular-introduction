import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NBA';
  teams:Array<Object> = [
    {
      year:"2015-2016",
    name:"Cleveland Cavaliers",
    src:"https://lh3.googleusercontent.com/iCynHQsMHqgZ9AXPZ6bE5GoOGwRVdNACXGwF3EPhIpRm_33uRZ4EbWobWmygsILJZfo=w300",
    bestPlayer:["Lebron", "Irvin", "Kevin Love", "J.R. Smith", "Varejao"]

  },{
  year:"2013-2015",
  name:"Golden State Warriors",
  src:"https://lh3.ggpht.com/5BLbmOPf1LnAcRB7gyanVpsILaEG06PQDATi-CLqpKe4u-PCM2MUy66J5ynwS_Fhnfw=w300",
  bestPlayer:["Stephen Curry", "Klay Thompson", "Damon Greet", "Chris bogut", "Ezeli"]

},{
  year:"2013-2014",
name:"San Antonio Spurs",
src:"https://s-media-cache-ak0.pinimg.com/originals/50/8c/0c/508c0c78fbbf5222127ed33bd123c2f4.jpg",
bestPlayer:["Tony Parker", "Manu Ginobili", "Kawai Leonard", "Pau Gasol", "Tim Duncan"]

}]
}
