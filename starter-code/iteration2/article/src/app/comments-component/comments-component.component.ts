import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-comments-component",
  templateUrl: "./comments-component.component.html",
  styleUrls: ["./comments-component.component.css"]
})
export class CommentsComponentComponent implements OnInit {
  constructor() {}

  comments: Array<Object> = [
    {
      title: "comentario1",
      description: "el cuerpo del comentario",
      date: "12/07/2016 13:45"
    },
    {
      title: "comentario2",
      description: "el cuerpo del comentario 2",
      date: "07/03/2016 13:45"
    },
    {
      title: "comentario3",
      description: "el cuerpo del comentario 3",
      date: "/05/2016 20:45"
    }
  ];
  ngOnInit() {}
}
