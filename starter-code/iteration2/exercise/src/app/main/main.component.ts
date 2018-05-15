import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'Ironhack Chronicals';
  image = 'https://kids.nationalgeographic.com/content/dam/kids/photos/Countries/Q-Z/spain-madrid.adapt.945.1.jpg';
  decrip = 'Squirty cheese goat halloumi. Smelly cheese roquefort feta boursin airedale pecorino cheesy feet say cheese.';
  constructor() { }

  ngOnInit() {
  }

}
