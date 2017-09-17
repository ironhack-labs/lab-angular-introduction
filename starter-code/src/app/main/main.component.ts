import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title:String;
  url:String;
  description:String;

  constructor() { }

  ngOnInit() {
    this.title = "We are coding in Ironhack";
    this.url = "../images/MarioMainImage.png"
    this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices lorem vitae maximus eleifend. Mauris facilisis lacus ut rutrum dictum. Sed pulvinar urna ut interdum scelerisque. Aenean vel congue metus. Mauris et lectus sed enim congue semper. Sed laoreet sapien quis arcu iaculis tincidunt. Fusce sed eleifend nisi, et vehicula velit. Vestibulum ipsum velit, rhoncus cursus tortor eget, varius lobortis erat. Donec finibus, dolor sed faucibus placerat, dolor nulla dapibus dolor, at fringilla sem nunc sed sem. Quisque iaculis dignissim est at scelerisque. Etiam vel bibendum sapien. Quisque dapibus, urna eget faucibus sagittis, massa metus vehicula tellus, in ultrices eros leo pellentesque ipsum."
  }

}
