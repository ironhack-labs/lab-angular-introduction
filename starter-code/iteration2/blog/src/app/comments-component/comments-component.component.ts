import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  constructor() {}

  comments: Array<Object> = [
    {
      user: 'Alex',
      date: new Date(),
      comment: 'Qué bonito'
    },
    {
      user: 'Alex',
      date: new Date(),
      comment: 'Qué bonito'
    },
    {
      user: 'Alex',
      date: new Date(),
      comment: 'Qué bonito'
    },
    {
      user: 'Alex',
      date: new Date(),
      comment: 'Qué bonito'
    },
    {
      user: 'Alex',
      date: new Date(),
      comment: 'Qué bonito'
    }
  ];

  name = {}

  recordAllInputKeyStrokes(event) {
        console.log(`Key inserted: ${event.key}`);
        //console.log(`Input value: ${event.currentTarget.value}`);
    }

  recordTextArea(event) {
        console.log(`Text area value:
        ${event}`);
    }
   recordInput2() {
     console.log("entra")
     console.log(this.name);
     this.name = {}
   }

  ngOnInit() {}
}

