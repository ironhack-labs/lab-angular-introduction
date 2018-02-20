import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  person = 'Paco';
  updatedUp = '18/02/2018 17:30';
  description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit, obcaecati necessitatibus commodi alias ullam.';

  constructor() { }

  ngOnInit() {
  }

}
