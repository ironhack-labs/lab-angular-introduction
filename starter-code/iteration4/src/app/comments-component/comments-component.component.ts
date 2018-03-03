import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  title01: string = 'Hada 001';
  title02: string = "Hada 002";
  title03: string = "Mickey Mouse";
  description01: string = "From a cheerful cruise around the world to a thrilling bobsled run down an icy mountain, we’ve got something for everyone";
  description02: string = "Check out fireworks, a nighttime spectacular, parades, live music, shows and much more!";
  description03: string = "Discover how every season brings new surprises and find out how you can get an insider peek at how we make the magic"
  
  constructor() { }

  ngOnInit() {
  }

}
