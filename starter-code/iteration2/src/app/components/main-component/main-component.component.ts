import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title: string = 'Dear TA, thanks for correcting this';
  imageURL: string = './assets/img/keep-working-hard.jpg';
  description: string = 'It\'s always a pleasure to receive some feedback from you guys. Hope today a lot of people has done the daily exercise for you to have some work to do and don\'t get too bored. Keep working hard!!!';

  constructor() { }

  ngOnInit() {
  }

}
