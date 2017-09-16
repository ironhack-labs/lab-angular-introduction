import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
 
  images : Array<any>= [
    {
      title: "Photo 1",
      image: "http://fakeimg.pl/350x200/ff0000/000"
    },
    {
      title: "Photo 2",
      image: "http://fakeimg.pl/350x200/ff0000/000"
    },
    {
      title: "Photo 3",
      image: "http://fakeimg.pl/350x200/ff0000/000"
    }
  ];

  constructor() { 
    
  }

  ngOnInit() {
  }

}
