import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  @Input('hola') hola: any;
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
