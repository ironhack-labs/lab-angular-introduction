import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coments-component',
  templateUrl: './coments-component.component.html',
  styleUrls: ['./coments-component.component.css']
})
export class ComentsComponentComponent implements OnInit {

  comments: Array<Object> = [
    {
      comment: 'Best movie ever',
      username: 'John',
      date: new Date()
    }, {
      comment: 'My favourite is the Empire Strikes Back',
      username: 'Emma',
      date: new Date()
    }, {
      comment: 'I am looking forward to see the new movies',
      username: 'Peter',
      date: new Date()
    }, {
      comment: 'Not bad',
      username: 'Claire',
      date: new Date()
    }
  ];

  ngOnInit() {
  }

}
