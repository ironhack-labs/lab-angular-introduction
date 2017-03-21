import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-em-boy',
  templateUrl: './pipe-em-boy.component.html',
  styleUrls: ['./pipe-em-boy.component.css']
})
export class PipeEmBoyComponent implements OnInit {
  myName: string = "Kevin";
  myDate: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  increment(){
    const changedDate = new Date(this.myDate);
    changedDate.setDate(this.myDate.getDate() + 1);
    this.myDate = changedDate;
  }

}
