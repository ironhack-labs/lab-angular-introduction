import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-iteration3',
  templateUrl: './my-iteration3.component.html',
  styleUrls: ['./my-iteration3.component.css']
})
export class MyIteration3Component implements OnInit {
  Championships : Array<object> =[
    {
      year : "2015 2016",
      name : "claveland",
     picture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzMIeA0pgEWBbkIWfdatBzOLAi6OiTKYyr3yw1_hFbYBuhG5Z",
     players :""
},
{
  year : "2014 2015",
  name : "warrior",
  picture : "http://www.rebelsport.co.nz/productimages/THUMB/1/81819_275303_165427.jpg",
  players :""
},
{
  year : "2013 2014",
  name : "spurs",
  picture : "https://images-na.ssl-images-amazon.com/images/I/71hAbYrepbL._SY355_.jpg",
  players :""
}];

  bestPplayers : Array<object> =[
    {clavelandPlayer: ""},
    {warriorPlayer:""},
    {spursPlayer:""}



  ]

  constructor() { }

  ngOnInit() {
  }

}
