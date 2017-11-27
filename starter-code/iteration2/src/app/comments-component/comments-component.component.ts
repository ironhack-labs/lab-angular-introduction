import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  comments: Array<Object> = [
      {
        author: 'Cerito',
        date: '07-07-2007',
        content: 'Lorem fistrum no te digo trigo por no llamarte Rodrigor no te digo trigo por no llamarte Rodrigor ese hombree ese hombree fistro condemor apetecan.'
      },{
        author: 'Penurias',
        date: '07-07-2007',
        content: 'Lorem fistrum no te digo trigo por no llamarte Rodrigor no te digo trigo por no llamarte Rodrigor ese hombree ese hombree fistro condemor apetecan.'
      },{
        author: 'Garbanzo',
        date: '07-07-2007',
        content: 'Lorem fistrum no te digo trigo por no llamarte Rodrigor no te digo trigo por no llamarte Rodrigor ese hombree ese hombree fistro condemor apetecan.'
      },{
        author: 'Perro',
        date: '07-07-2007',
        content: 'Lorem fistrum no te digo trigo por no llamarte Rodrigor no te digo trigo por no llamarte Rodrigor ese hombree ese hombree fistro condemor apetecan.'
      },{
        author: 'Malo',
        date: '07-07-2007',
        content: 'Lorem fistrum no te digo trigo por no llamarte Rodrigor no te digo trigo por no llamarte Rodrigor ese hombree ese hombree fistro condemor apetecan.'
      },{
        author: 'Babosa',
        date: '07-07-2007',
        content: 'Lorem fistrum no te digo trigo por no llamarte Rodrigor no te digo trigo por no llamarte Rodrigor ese hombree ese hombree fistro condemor apetecan.'
      }];

  constructor() { }

  ngOnInit() {
  }

}
