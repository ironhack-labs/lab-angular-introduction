import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  image1 = 'https://assets.hospitalityonline.com/brands/employers/logos/000/270/234/logo.png?1510925392';
  image2 = 'https://i.pinimg.com/originals/f6/5c/4d/f65c4d2223276318c21cd2048d3ef2bb.jpg';
  image3 = 'https://www.barcelonas.com/images/256xNxfc-barcelona-club-crest.jpg.pagespeed.ic.4HCUasoj2M.jpg';
  photos = [
    {photo: 'https://assets.hospitalityonline.com/brands/employers/logos/000/270/234/logo.png?1510925392', desc: 'miami'},
    {photo: 'https://i.pinimg.com/originals/f6/5c/4d/f65c4d2223276318c21cd2048d3ef2bb.jpg', desc: 'madrid'},
    {photo: 'https://www.barcelonas.com/images/256xNxfc-barcelona-club-crest.jpg.pagespeed.ic.4HCUasoj2M.jpg', desc: 'barca'}
  ];
}
