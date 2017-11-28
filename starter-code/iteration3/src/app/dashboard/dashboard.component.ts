import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  championships = [
    new championships('2014-15','Hunter Morty',
    'https://pocketmortys.net/images/assets/MortyWildManFront.png',
    [
      'Slumber',
      'Fortify',
      'Flail',
      'Protect'
    ]
  ),
  new championships('2015-16','Unicorn Morty',
    'https://pocketmortys.net/images/assets/MortySuperUnicornFront.png',
    [
      'Encrust',
      'Glitter Blast',
      'Flair',
      'Love Bug'
    ]
  ),
  new championships('2016-17','Jesus Morty',
    'https://pocketmortys.net/images/assets/MortyTheOneTrueFront.png',
    [
      'Harden',
      'Condition',
      'Ascend',
      'Sparkle'
    ]
  )]

}


class championships {
  constructor(
    public year:string,
    public champion:string,
    public championUrl:string,
    public bestPlayers:Array<string>
  ){}
}
