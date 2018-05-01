import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.scss']
})
export class CommentsComponentComponent implements OnInit {

  data = [
    {
      name: 'Paco',
      description: 'dsaandisovndfuivbidflvb ddñfdvñig'
    },
    {
      name: 'Pepe',
      description: 'foivnosbñrñsbnignboñinbo´ñdibnsíñ'
    },
    {
      name: 'Juan',
      description: 'dpsnoiavsnfovñfndo´nbownvosç´nvboi´bo'
    },
    {
      name: 'Paca',
      description: 'dpsnoiavsnfovñfndo´nbownvosç´nvboi´bo'
    },
    {
      name: 'Pepin',
      description: 'dpsnoiavsnfovñfndo´nbownvosç´nvboi´bo'
    }
  ];
  constructor() { }

  consoleLog(name, description) {
    this.data.push({name, description});
  }
  ngOnInit() {
  }

}
