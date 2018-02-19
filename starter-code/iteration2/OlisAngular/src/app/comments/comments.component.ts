import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"]
})
export class CommentsComponent implements OnInit {
  title: string = "Comments";
  comments = [
    {
      comentador: "Pepiin",
      date: new Date(),
      comentario: "este foro es la leche"
    },
    {
      comentador: "Pepiin",
      date: new Date(),
      comentario: "este foro es la leche"
    },
    {
      comentador: "Pepiin",
      date: new Date(),
      comentario: "este foro es la leche"
    } 
  ];
  constructor() {}

  ngOnInit() {}
}
