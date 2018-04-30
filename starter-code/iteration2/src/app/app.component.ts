import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  photos: Array<Object> = [
    {
      path: 'http://nightdeveloper.net/wp-content/uploads/2014/12/mongo_db.png', title: 'MongoDB'
    },
    {
      path: 'http://www.timlisiecki.com/img/skills/express.png', title: 'Express'
    },
    {
      path: 'http://blog.hostdime.com.co/wp-content/uploads/angularjs-como-programar.png', title: 'Angular'
    },
    {
      path: 'https://victorroblesweb.es/wp-content/uploads/2016/03/nodejs.png', title: 'Node'
    },
    {
      path: 'https://commons.wikimedia.org/wiki/File:Rock_%27n%27_Roll_Dancing_Show_(8108298634).jpg', title: 'Rock'
    }
  ];
}
