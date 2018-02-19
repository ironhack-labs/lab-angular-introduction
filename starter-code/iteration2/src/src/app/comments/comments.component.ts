import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
    comments =[
      {
        description:'Es super chuchuchuli',
        name: 'Perico de los Palotes',
        date: '19/02/2018-20:32'
      },
      {
        description:'Podria esta mejor',
        name: 'Maria de la O',
        date: '05/02/2018-11:15'
      },
      {
        description:'Pues nose si me gusto o no',
        name: 'El gallego decidido',
        date: '01/01/2018-13:15'
      },
    ];
  constructor() { }

  ngOnInit() {
  }

}
