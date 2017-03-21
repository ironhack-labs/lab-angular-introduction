import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-mixed-bind',
  templateUrl: './my-mixed-bind.component.html',
  styleUrls: ['./my-mixed-bind.component.css']
})
export class MyMixedBindComponent implements OnInit {
  isDisabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleInput() {
    this.isDisabled = !this.isDisabled;
  }

}
