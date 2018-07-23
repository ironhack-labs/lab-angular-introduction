import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  comments = [
    {
      author: 'Bobby Fischer',
      time: '14/03/2014 23:14',
      comment: 'Lorem fistrum benemeritaar mamaar de la pradera diodeno. Apetecan a gramenawer amatomaa te voy a borrar el cerito se calle ustée llevame al sircoo diodenoo tiene musho peligro pupita no te digo trigo por no llamarte Rodrigor. Fistro amatomaa torpedo la caidita ese que llega torpedo al ataquerl está la cosa muy malar.'
    },
    {
      author: 'Pink Floyd',
      time: '14/03/2014 03:14',
      comment: 'Dark side of the moon'
    }
  ]
}
