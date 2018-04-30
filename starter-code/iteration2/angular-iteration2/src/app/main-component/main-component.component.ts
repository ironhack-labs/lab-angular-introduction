import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title= "THIS IS A TITLE";
  image= "https://c8.alamy.com/compes/akam12/esbelto-tailed-suricata-o-con-cub-pie-suricata-suricatta-akam12.jpg";
  description= "There should be a description here. There is not.";

  constructor() { }

  ngOnInit() {
  }

}
