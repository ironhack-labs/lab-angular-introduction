import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app works!';
  album: Array<Object> = [
    {
      photo: 'https://3.bp.blogspot.com/-JGce23gXXkE/WBpOuvRrF2I/AAAAAAAAALg/b4oAmNrYTfkCdhmqWb0hgbhxTdqdvduqwCLcB/s1600/13265835_992522664129740_3545830101080763577_n.png',
      description: 'Jiennense',
    },
    {
      photo: 'http://1.bp.blogspot.com/-O8QG_Z85Axw/TwytCo9OKYI/AAAAAAAAFS0/VtIdDX1uBJc/s1600/Gaditano%252BPouter%252BPigeon%252B16.JPG',
      description: 'Gaditano',
    },
    {
      photo: 'https://files.laliga4sports.es/201802/1024x800_03c3515afe22125945buchon-vele--o.jpg?22218125949',
      description: 'Velenho',
    },
  ];
}
