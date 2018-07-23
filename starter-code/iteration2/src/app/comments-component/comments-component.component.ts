import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  title = 'Comments';
  comments: Array<Object> = [
    {
      name: 'Giorgio',
      words: 'Molto bella! Mi piace molto.'
    },
    {
      name: 'Turista45',
      words: 'Mi encantar Gran Vía. Es mucho bonita como cuadro de Antonio López'
    }
  ];

  constructor() { }
  ngOnInit() {
  }

}
