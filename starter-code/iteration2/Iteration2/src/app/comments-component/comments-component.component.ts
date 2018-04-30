import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  data = [
    {
      name:'Bobby Tables',
      description:'It seems difficult'
    }
  ]
  constructor() { }
    


  ngOnInit() {
  }

}
