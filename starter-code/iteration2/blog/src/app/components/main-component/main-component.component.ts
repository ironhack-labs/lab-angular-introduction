import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent {
    title = 'Learn how to code with Ironhack';
    image = 'https://vignette.wikia.nocookie.net/dragonballfanon/images/7/70/Random.png/revision/latest?cb=20161221030547';
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet augue nisi, quis molestie ipsum hendrerit quis. Aliquam tortor leo, aliquam ut pulvinar eget, luctus vel turpis. Etiam feugiat ante et iaculis luctus. Nullam viverra lectus id tortor pellentesque, non molestie odio finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam euismod massa ac velit pharetra, vel tempor neque lobortis. Etiam ultricies massa et neque rhoncus pretium.'
  constructor() { }

}
