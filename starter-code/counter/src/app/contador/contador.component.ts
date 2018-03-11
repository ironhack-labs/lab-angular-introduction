import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  counter: number = 0;

  onClickIncrease = (): void => {
    this.counter++;
  }

  onClickDecrease = (): void => {
    this.counter--;
  }

  constructor() { }

  ngOnInit() {
  }

}
