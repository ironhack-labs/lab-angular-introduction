import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nbachamps',
  templateUrl: './nbachamps.component.html',
  styleUrls: ['./nbachamps.component.css']
})
export class NbachampsComponent implements OnInit {

  title: string = "NBA CHAMPS";

  champions: Array<any> = [
    { team: 'Cleveland Cavaliers',
      year: '2016',
      champion_url: 'https://cdn0.vox-cdn.com/thumbor/Xaall80AEvLCUGcAJ9X17PVM0aU=/0x26:400x293/1310x873/cdn0.vox-cdn.com/uploads/chorus_image/image/47827881/large_fearthesword.com.minimal.0.png',
      best_player: 'Lebron James'
    },
    { team: 'Golden State Warriors',
      year: '2015',
      champion_url: 'https://img08.rl0.ru/15133a14219809388d10c4dd739d23b4/c300x300/i0.wp.com/i.imgur.com/oyEgJ.png?w=150&h=150',
      best_player: 'Steph Curry'
    },
    { team: 'San Antonio Spurs',
      year: '2014',
      champion_url: 'https://giving.sc.edu/UserFiles/usc/Images/2016_Spurs_logo.jpg',
      best_player: 'Steph Curry'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}


// export class AppComponent {
//   title = 'Tour of Heroes';
//   heroes = [
//     new Hero(1, 'Windstorm'),
//     new Hero(13, 'Bombasto'),
//     new Hero(15, 'Magneta'),
//     new Hero(20, 'Tornado')
//   ];
//   myHero = this.heroes[0];
// }
