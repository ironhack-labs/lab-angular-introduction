import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  img01: string = "../assets/img/DISNEY_1.jpg"
  description01: string = "Enter a magical kingdom where you can sail with pirates, explore exotic jungles, meet fairy-tale princesses, dive under the ocean and rocket through the stars—all in the same day! Disneyland Park is a beloved Southern California destination where generations of families have made their Disney dreams come true. Walt’s Disney’s original Disneyland theme park, which first opened on July 17, 1955, is now divided into 8 extravagantly themed lands: Main Street, U.S.A., Tomorrowland, Fantasyland, Mickey’s Toontown, Frontierland, Critter Country, New Orleans Square and Adventureland."
  constructor() { }

  ngOnInit() {
  }

}
