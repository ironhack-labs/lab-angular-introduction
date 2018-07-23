import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  title = 'app works!';
  album: Array<any> = [
    {
      id: 1,
      url: "http://nextprojection.com/wp-content/uploads/2013/03/Screen-Shot-2013-03-21-at-3.46.53-PM.png",
    },
    {
      id: 2,
      url: "https://i1.wp.com/nerdbastards.com/wp-content/uploads/2014/06/TMNT.jpg?w=600",
    },
    {
      id: 3,
      url: "http://basementrejects.com/wp-content/uploads/2013/05/teenage-mutant-ninja-turtles-movie-tmnt-leonardo-donatello-raphael-michelangelo.jpg",
    }

  ];
};
  

