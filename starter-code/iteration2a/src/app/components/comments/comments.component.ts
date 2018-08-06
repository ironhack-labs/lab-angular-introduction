import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent  {

  title: string = 'Comments';
  comments: Array<Object> = [
    {
      id: 1,
      name: 'Thor@thor.com',
      date: '06/08/2018',
      time: '18:59',
      description: 'Brutal angular'
    }, {
      id: 2,
      name: 'Manolito gafotas',
      date: '06/08/2018',
      time: '19:00',
      description: 'Genial todo eh!'
    }
  ];
   constructor() { }

}
