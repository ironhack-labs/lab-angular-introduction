import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  info: Array<Object>  = [
    {
      img: "https://latino.starwars.com/wp-content/uploads/2015/10/tfa_poster_wide_header-1536x864-3243973893572.jpg",
      title: "Star Wars 1"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png",
      title: "Star Wars 2"
    },
    {
      img: "https://www.rockandpop.cl/wp-content/uploads/2018/03/parque-e1520612168895.png",
      title: "Star Wars "
    }
  ]
}
