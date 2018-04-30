import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.scss']
})
export class CommentsComponentComponent implements OnInit {
  data = [
    {
      author: "Pepe",
      description: "JUAS JUAS JUAS"
    },
    {
      author: "Juan",
      description: "JUAN JUAN JUAN"
    },
    {
      author: "Incognito",
      description: "El señor incognito"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
