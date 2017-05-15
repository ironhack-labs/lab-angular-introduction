import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  article = {
    title: "Hello  world!",
    image: "http://ruinmyweek.com/wp-content/uploads/2016/04/the-best-funny-pictures-of-donald-trump-in-vegan-butter.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet ligula eu felis lacinia malesuada. Duis ornare, dui a auctor blandit, mauris leo eleifend nibh, eu luctus felis justo sed erat. Etiam id diam vitae orci vestibulum malesuada. Donec pellentesque laoreet faucibus. Ut tortor nulla, varius vitae feugiat quis, pulvinar ultrices sapien. Duis dapibus pellentesque pulvinar. Phasellus ut ornare velit. Donec interdum euismod facilisis. Aenean eget ante id arcu ultricies aliquet at egestas quam. Suspendisse tellus purus, vulputate eu nibh eu, venenatis tristique nulla. Sed euismod pulvinar velit, non facilisis dolor maximus a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel lacus leo. Morbi tincidunt arcu elit, eget porttitor erat molestie in. Vivamus pharetra congue ipsum condimentum sodales. Donec nulla tellus, tincidunt tristique nunc a, pulvinar interdum tortor.",
  }
  constructor() { }

  ngOnInit() {
  }

}
