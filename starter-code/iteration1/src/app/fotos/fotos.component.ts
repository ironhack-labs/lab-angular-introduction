import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  fotos: Array<Object> = [
    {
      url:"https://secure.meetupstatic.com/photos/member/a/4/1/9/highres_253242009.jpeg",
      description: "Marquito"
    },
    {
      url:"https://energy.gov/sites/prod/files/styles/borealis_article_hero_respondxl/public/tesla_portrait_0.jpeg?itok=vN04dywk",
      description : "Nikola Tesla"
    },
    {
      url:"https://i2.wp.com/hipertextual.com/files/2014/12/Hesisenberg-740x484.jpg?resize=740%2C484",
      description : "Heisenberg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
