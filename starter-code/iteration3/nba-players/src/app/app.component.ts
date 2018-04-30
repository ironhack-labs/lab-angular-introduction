import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  nba: Array<Object> = [
    {
      id:1,
      year: '2017-2018',
      champion: 'Golden State Warriors',
      championUrl: 'https://en.wikipedia.org/wiki/2016%E2%80%9317_Golden_State_Warriors_season',
      championBadge: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/200px-Golden_State_Warriors_logo.svg.png',
      bestPlayer: ['Jordan bell', 'john travolta']
    },

    {
      id:2,
      year: '2017-2018',
      champion: 'Michigan State',
      championUrl: 'https://en.wikipedia.org/wiki/2016%E2%80%9317_Golden_State_Warriors_season',
      championBadge: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Toronto_Maple_Leafs_2016_logo.svg/220px-Toronto_Maple_Leafs_2016_logo.svg.png',
      bestPlayer: ['Fredrik Högström', 'santa claus']
    },


    {
      id:3,
      year: '2017-2018',
      champion: 'ironhack State',
      championUrl: 'https://en.wikipedia.org/wiki/2016%E2%80%9317_Golden_State_Warriors_season',
      championBadge: 'https://pbs.twimg.com/profile_images/922856272332054528/UB_AjsnV_400x400.jpg',
      bestPlayer: ['andre zero', 'byron 420']
    }

  ];
}
