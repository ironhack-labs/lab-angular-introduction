import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  imageDetail =[
    {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEB8mkjEKKjrWnjQVSixc4NPl-xpt56R9Q9Ol9U-4r4mulcT65",
    description: "En el campo"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-y1_yVR2TZ_rdLzYptoN_8WRvdtbs9bDbz3S5ocQtZTVmi9fHhQ",
    description: "Family day"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67ZCym_Sr2_qu97YzCq2INtreOb9XerIpKb4zDu0el-fc9j2J",
    description: "Friends"
  }
];

  constructor() { }

  ngOnInit() {
  }

}
