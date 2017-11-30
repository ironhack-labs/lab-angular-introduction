import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-event-binding',
  templateUrl: './my-event-binding.component.html',
  styleUrls: ['./my-event-binding.component.css']
})
export class MyEventBindingComponent implements OnInit {
  recordAllTheKeyStrokes(event) {
        console.log(`Key inserted: ${event.key}`);
        //console.log(`Input value: ${event.currentTarget.value}`);
    }
  constructor() { }

  ngOnInit() {
  }

}
