import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = "Learn how to code with Angular";
  image = "/assets/pexels-photo-585418.jpg";
  caption = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare viverra consequat. Sed eu tortor dolor. Nulla facilisis lorem eu turpis condimentum, eget bibendum ex aliquam. Aliquam id augue sollicitudin, cursus purus sit amet, aliquam nisi. Proin consequat quis diam id feugiat. Nullam id risus eu nunc congue laoreet. Nam pellentesque purus eu velit posuere maximus. Praesent interdum risus vitae nulla lacinia lacinia et quis mauris. In non diam odio. Sed id ante eros. Quisque porttitor turpis in dui suscipit laoreet. Pellentesque pulvinar leo ut massa laoreet tincidunt. Nulla facilisi."

  constructor() { }

  ngOnInit() {
  }

}
