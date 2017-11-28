import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-nested',
  templateUrl: './my-nested.component.html',
  styleUrls: ['./my-nested.component.css']
})

export class MyNestedComponent implements OnInit {
  comments: Array<Object> =[
    {
       author: 'Billy',
       date: new Date(),
       content: 'Flama One '
     },{
       author: 'Bobby',
       date: new Date(),
       content: 'Flama Two. '
     },{
       author: 'Milly',
       date: new Date(),
       content: 'Flama 3 '
     },
 ]

  constructor() { }

  ngOnInit() {
  }

}
