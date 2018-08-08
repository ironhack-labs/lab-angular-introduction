import { Component, OnInit } from '@angular/core';
import { createDiffieHellman } from 'crypto';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  comments = [
    { name: 'Tommy Dill', date: '08-07-2018', comment: 'I made an app' },
    { name: 'Tiger Woods', date: '08-08-2018', comment: 'I thought it was a golf class for irons' }

  ];
  constructor() { }

  ngOnInit() {
  }

}
