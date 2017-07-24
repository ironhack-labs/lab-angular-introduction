import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class Photo {
    photoUrl: string;
    name: string;
}

const pictures : Photo[] = [{
  photoUrl : "http://gph.is/1swzxHT",
  name : "One shot More!"
},{
  photoUrl : "http://gph.is/2lhtbi4",
  name : "What you want?"
},{
  photoUrl : "http://gph.is/2cJDz1D",
  name : "Welcome!"
}
]

export class AppComponent {
  title = 'app works!';
}
