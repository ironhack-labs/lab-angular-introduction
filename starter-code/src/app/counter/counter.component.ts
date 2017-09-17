import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter:number = 0;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
