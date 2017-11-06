import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champ',
  templateUrl: './champ.component.html',
  styleUrls: ['./champ.component.css']
})
export class ChampComponent implements OnInit {
  title = 'Comments';
  teams: any[] = [
    {
      name: "SKT",
      logo: "../../assets/images/SKT.png",
      players: [
        'Kim "Profit" Joon-hyung (김준형)',
        'Support	Kim "TaeHoon" Tae-hoon (김태훈)',
        'Jungler	Bae "Bengi" Seong-ung (배성웅)',
        'Top	Lee "Duke" Ho-Seong (이호성)',
        'Mid	Lee "Scout" Ye-chan (이예찬)',
        'Top	Jang "MaRin" Gyeong-Hwan (장경환)',
        'Jungler	Im "Tom" Jae-hyeon (임재현)',
        'Mid	Lee "Easyhoon" Ji-hoon (이지훈)',
        'Support	Lee "Piccaboo" Jong-Beom (이종범)',
        'Top	Jung "Impact" Eon-yeong (정언영)',
        'AD Carry	Chae "Piglet" Gwang-jin (채광진)',
        'Support	Lee "PoohManDu" Jeong-hyeon (이정현)',
        'Support	Kwon "Casper" Ji-min (권지민)'
      ]
    },
    {
      name: "Samsung Galaxy",
      logo: "../../assets/images/Samsung.png",
      players: [
        'Lee "CuVee" Seong-jin (이성진) (Top Lane)',
        'Kang "Ambition" Chan-yong (강찬용) (Jungle)',
        'Kang "Haru" MinSeung (강민승) (Jungle)',
        'Lee "Crown" Min-ho (이민호) (Mid Lane)',
        'Park "Ruler" Jae-hyuk (박재혁) (AD Carry)',
        'Jo "CoreJJ" Yong-in (조용인) (Support)',
        'Lee "Stitch" Seung-ju (이승주) (AD Carry)',
        'Kwon "Wraith" Ji-min (권지민) (Support'
      ]
    }
  ];
  arrayofChampions: any[] = [
    {
      year: 2016,
      team: this.teams[0],
      score: '3-2'
    },
    {
      year: 2015,
      team: this.teams[1],
      score: '3-1'
    },
    {
      year: 2014,
      team: this.teams[0],
      score: '3-1'
    }
  ];

  constructor() { }
  ngOnInit() { }
}
