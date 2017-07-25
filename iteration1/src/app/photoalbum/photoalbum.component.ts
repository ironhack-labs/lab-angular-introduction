import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photoalbum',
  templateUrl: './photoalbum.component.html',
  styleUrls: ['./photoalbum.component.css']
})
export class PhotoalbumComponent implements OnInit {
    album = [
    {
      title: 'Cool',
      url: 'http://www.planwallpaper.com/static/images/10-Cool-Google-Brand-Covers_sMxmvqR.jpg'
    },
    {
      title: 'Funny',
      url: 'https://s-media-cache-ak0.pinimg.com/736x/9b/79/52/9b795278d51497222d70722e3ab110ca.jpg'
    },
    {
      title: 'Strange',
      url: 'http://i.dailymail.co.uk/i/pix/2017/03/24/11/3E95F11800000578-0-image-a-1_1490353578301.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
