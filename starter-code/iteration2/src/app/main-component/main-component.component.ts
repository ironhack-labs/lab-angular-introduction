import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  article= {
    title: "Learn how to code with IronHack",
    image: "http://portal.uniplaces.com/wp-content/uploads/2017/05/madrid-overview-sunsetovermadrid-xlarge.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nunc rhoncus ligula luctus semper. Integer suscipit est et bibendum tempus. Fusce pharetra ligula vel mauris mattis, vel porta eros semper.",
  }
  constructor() { }

  ngOnInit() {
  }

}
