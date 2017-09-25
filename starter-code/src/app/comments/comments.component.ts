import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Array<Object> = [
    {
      author: "Alba Veryser",
      date: "24/09/2017 ",
      hour: "19.30h",
      text: "Estuve hace un año y es un museo alucinante!"
    },
    {
      author: "Elisa Lorente",
      date: "25/09/2017",
      hour: "9:00h",
      text:  "Y que lo digas! El tiovivo de la animación es brutal!"
    }
  ]



  constructor() { }

  ngOnInit() { }
}
