import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  pictures = [
    {
      url: "https://www.officelovin.com/wp-content/uploads/2016/01/ragged-edge-london-office-6.jpg",
      description: "first image of an office"
    },
    {
      url: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&h=350",
      description: "second image of an office"
    },
    {
      url: "https://www.officelovin.com/wp-content/uploads/2014/09/huge-bk-office-6.jpg",
      description: "you get the idea..."
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
