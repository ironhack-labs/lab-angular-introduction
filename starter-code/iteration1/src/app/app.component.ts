import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  imgs=[{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTaQLp3pzyC3zant46VtWTLHNK184C9d4Q1-Sk6FRpzeKQE-R8Tw",description:"Soy la imagen 1"},{src:"https://i.ytimg.com/vi/pIrOAyXIjak/maxresdefault.jpg",description:"Soy la imagen 2"},{src:"https://pbs.twimg.com/profile_images/717883346970349568/WwNCQh4n_400x400.jpg",description:"Soy la imagen 3"}]
}
