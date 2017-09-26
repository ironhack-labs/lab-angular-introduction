import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  photoList = [
    {photoTitle:"Honey Badger", url:"http://i0.kym-cdn.com/photos/images/original/000/812/357/d87.jpg"},
    {photoTitle:"Badger cows lion", url:"https://thechive.files.wordpress.com/2015/11/is-the-honey-badger-really-as-much-of-a-bad-ass-as-everyone-thinks-15-photos-11.jpg?quality=85&strip=info&w=600"},
    {photoTitle:"Bad Ass Badger", url:"https://i.amz.mshcdn.com/qRvRPBUQru_7osVY1vrGneXLfsI=/950x534/filters:quality(90)/2012%2F12%2F04%2Fbe%2Ffacebookthe.aIK.jpg"}
  ]
}
