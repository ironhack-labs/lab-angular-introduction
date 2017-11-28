import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'World\'s Longest Waves!';
}

wave1 = {
  img: "https://www.thebestsurfschools.com/wp-content/uploads/2015/04/jeffreysbay1.jpg",
  description: "Jeffrey's Bay, South Africa"
};

wave2 = {
  img: "http://briancampagna.com/wp-content/uploads/2014/04/10-Chicama-Peru.jpg",
  description: "Chicama, Peru"
};

wave3 = {
  img: "http://i.cdn-surfline.com/surfnews/images/2013/07_july/walk_namibia/full/AndoSA-1132.jpg",
  description: "Skeleton Bay, Namibia"
};