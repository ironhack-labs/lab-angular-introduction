import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
img1= "https://i.gifer.com/7OhN.gif"
img = "https://metrouk2.files.wordpress.com/2018/03/giphy9.gif?w=748&h=561&crop=1"
img2= "https://vignette.wikia.nocookie.net/cuphead/images/8/80/Cool.gif/revision/latest?cb=20171210174907"
  constructor() { }

  ngOnInit() {
  }

}
