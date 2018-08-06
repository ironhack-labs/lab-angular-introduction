import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = "Paris";
  image = "https://en.parisinfo.com/bundles/otcpotcp/images/paris_380x244.jpg";

  constructor() { }

  ngOnInit() {
  }
}
