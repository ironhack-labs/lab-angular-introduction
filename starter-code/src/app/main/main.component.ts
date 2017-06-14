import { Component, OnInit, Input } from '@angular/core';
import { Main } from './main.model'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  @Input() main: Main;


  constructor() {
}

  ngOnInit() {
  }
}
