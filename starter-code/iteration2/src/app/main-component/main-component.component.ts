import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css'],
  
})
export class MainComponentComponent implements OnInit {

  title = 'Visit Toronto!';
  image: string = 'http://www.seetorontonow.com/wp-content/uploads/2017/10/toronto-fall-sunset.jpg';
  caption: string = 'Toronto is a great city to visit! Nice weather, breath-taking skyline and vibrant nightlife are just some of the aspects you will enjoy!';

  constructor() { }

  ngOnInit() {
  }

}
