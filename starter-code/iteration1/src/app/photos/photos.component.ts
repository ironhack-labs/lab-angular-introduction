import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: Array<Object> = [
  {
    url: "http://vignette4.wikia.nocookie.net/rickandmorty/images/4/41/Morty_Smith.jpg/revision/latest?cb=20170217193441",
    description: "Morty"
  },
  {
    url: "http://vignette4.wikia.nocookie.net/rickandmorty/images/4/41/Morty_Smith.jpg/revision/latest?cb=20170217193441",
    description: "Morty"
  },
  {
    url: "http://vignette4.wikia.nocookie.net/rickandmorty/images/4/41/Morty_Smith.jpg/revision/latest?cb=20170217193441",
    description: "Morty"
}

]


  constructor() { }

  ngOnInit() {
  }

}
