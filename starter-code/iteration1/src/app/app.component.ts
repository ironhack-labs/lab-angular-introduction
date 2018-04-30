import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ironhack Logos';

  logos: Array<Object> = [
    {
      name: 'Light Blue',
      imgSrc: 'https://yt3.ggpht.com/a-/AJLlDp3zhyh0Jbvi9X6KSHisICrgWIJVXtl72cAKXQ=s900-mo-c-c0xffffffff-rj-k-no'
    },{
      name: 'Dark Blue',
      imgSrc: 'https://pbs.twimg.com/profile_images/925099449214386176/JKOFOHJJ_400x400.jpg'
    },{
      name: 'Black',
      imgSrc: 'https://static1.squarespace.com/static/56e2e0c520c6472a2586add2/t/594d23b7e6f2e1d4a11b69a3/1498231447084/?format=500w'
    }
  ]
}
