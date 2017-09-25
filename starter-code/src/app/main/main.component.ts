import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    title:string = "Pizza";
    images:string= "https://cdn.modpizza.com/wp-content/uploads/2016/11/mod-pizza-maddy-default-e1479167621575.png";
    descriptions:string= "delicous pizza"
  constructor() { }

  ngOnInit() {
  }

}
