import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NBA Champions';
  NBAchampions= [
    {year:"2015-16",name:"Cleveland Clavaliers",url:"http://armstrongonewire.com/sites/Portals/1/cleveland-cavaliers-logo-vector.png",bestPlayer:["jugador 1","jugador2","jugador3"]},
    {year:"2014-15",name:"Warriors",url:"http://www.diablomag.com/D-blog/News-and-Community/June-2010/Golden-State-Warriors-debut-new-logo-win-a-hat-t-shirt-and-sweatshirt/warriors.jpg",bestPlayer:["jugador 1","jugador2","jugador3"]},
    {year:"2015-16",name:"San Antonio",url:"http://www.pycomall.com/images/P1/NBATeamLogosSanAntonioSpursVectorFormat.jpg",bestPlayer:["jugador 1","jugador2","jugador3"]}

  ]
}
