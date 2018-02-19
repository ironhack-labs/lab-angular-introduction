import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  comments = [{
    name: "Mihai",
    date: "19-02-2018",
    description: "Una pasada de edificio, el segundo mas grande en volumen del mundo :O"
  },
  {
    name: "Veronika",
    date: "19-02-2018",
    description: "Una pasada de edificio, fuí con Mihai y flipamos"
  }];
 constructor() { }

  ngOnInit() {
  }

}
