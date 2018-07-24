import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:
  `<h1>HOLA{{title}}</h1>
  <h2>{{testVar}}</h2>
  <div id="myDiv"> </div>
  `
})
export class AppComponent {
  title = '2014 to 2018 NBA Champions';
  testVar = "una prueba"
  yearArr = [2014,2015,2016,2017,2018]
  champArr = ["San Antonio Spurs", "Golden State Warriors", "Cleveland Cavaliers", "Golden State Warriors", "Golden State Warriors"]
  

  sanAntLogo = "http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png"
  golWarLogo = "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png";
  clevCalLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuQQ_MoL8jlRGW1CmwR22wteV442tfATS7ngq5tDTZBAoGRrT1A_J2BY"

  logoArr = [this.sanAntLogo, this.golWarLogo, this.clevCalLogo,  this.golWarLogo, this.golWarLogo];

  //let targetDiv = document.getElementById("myDiv");
  
  
}
