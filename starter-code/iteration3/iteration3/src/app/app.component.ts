import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  curlingChampionship: Array<Championship> = [
    new Championship(
      2009, 
      "Ford World Curling Championship", 
      "https://media.giphy.com/media/YTY11wSN4Onvi/giphy.gif",
      [
        "Ernie Richardson",
        "Arnold Richardson",
        "Sam Richardson",
        "Wes Richardson",
      ], 
      ), 
    
    new Championship(
      2010, 
      "Capital One World Curling Championship", 
      "https://media.giphy.com/media/47gaUHlQkbN4s/giphy.gif",
      [
        "Ed Werenich",
        "Paul Savage",
        "John Kawaja",
        "Neil Harrison",
      ], 
      ),
    
    new Championship(
      2011, 
      "Ford World Curling Championship", 
      "https://media.giphy.com/media/xRWbUE6dxliuI/giphy.gif",
      [
        "Niklas Edin",
        "Oskar Eriksson",
        "Kristian Lindström",
        "Christoffer Sundgren",
      ]
    ),  
    
    // new Championship(
    //   2012, 
    //   "Blah", 
    //   "https://media.giphy.com/media/xRWbUE6dxliuI/giphy.gif",
    //   [
    //     "Blah",
    //     "Blah",
    //     "Blah",
    //     "Blah",
    //   ]
    // ),  
  ];

  // curlingChampions: Array<Champions> = [
  //   new Champions(
  //     [
  //       "Ernie Richardson",
  //       "Arnold Richardson",
  //       "Sam Richardson",
  //       "Wes Richardson",
  //     ], 
  //   ),
  //   new Champions(
  //     [
  //       "Ed Werenich",
  //       "Paul Savage",
  //       "John Kawaja",
  //       "Neil Harrison",
  //     ], 
  //   ),
  //   new Champions(
  //     [
  //       "Niklas Edin",
  //       "Oskar Eriksson",
  //       "Kristian Lindström",
  //       "Christoffer Sundgren",
  //     ]
  //   ),
  //   // new Champions(
  //   //   [
  //   //     "Blah",
  //   //     "Blah",
  //   //     "Blah",
  //   //     "Blah",
  //   //   ]
  //   // ),
  // ];

}

class Championship {
  constructor(
    public year: number,
    public name: string,
    public url: string,
    public champions: Array<string>,
  ){}
}

// class Champions {
//   constructor(
//     public champs: Array<string>
//   ){}
// }




