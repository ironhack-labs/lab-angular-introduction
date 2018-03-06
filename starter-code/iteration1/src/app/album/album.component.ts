import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor() { }

  album: Array<Object>=[ {
    src:"../../elbesoKlimt.jpg",
    description:"El beso de Gustav Klimt"
  },
   {
    src:"elbesoKlimt.jpg",
    description:"El beso de Gustav Klimt"
  },
   {
    src:"elbesoKlimt.jpg",
    description:"El beso de Gustav Klimt"
  }]
  
  ngOnInit() {
  }

}
