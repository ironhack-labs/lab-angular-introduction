import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Array<Object> = [
    {name: "Mario", desc: "Tengo una pregunta", postedAt: new Date},
    {name: "Miquel", desc: "Miralo en Google", postedAt: new Date},
    {name: "Kike", desc: "Estamos aqui ocupados con las cosas de los TA's", postedAt: new Date}
  ];
  ngOnInit() {
  }

}
