import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title= "HHHH";
  url= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMD7Z4HnMs1jh92vsxgDALDHJCSjX-NYkBzAOE4-Gd5JyYtgCh";
  description = "DDDDDDDDDDD";
  constructor() { }
  ngOnInit() {}
}
