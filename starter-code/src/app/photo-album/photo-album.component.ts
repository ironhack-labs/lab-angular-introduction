import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.css']
})
export class PhotoAlbumComponent implements OnInit, Input {
  @Input() image : any;
  constructor(){
    
  }
  ngOnInit() {
  }

}
