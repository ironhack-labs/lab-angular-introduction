import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  comments = [{
    name: 'Bobby',
    date: new Date('November 20, 2017 11:13:00'),
    // tslint:disable-next-line:max-line-length
    comment: 'Bobby dice: fistrum se calle ustée minim apetecan et caballo negroorl aliqua a peich ut. Lorem fistrum se calle ustée minim apetecan et caballo negroorl aliqua a peich ut. Lorem fistrum se calle ustée minim apetecan et caballo negroorl aliqua a peich ut.'
  },
  {
    name: 'Charly',
    date: new Date('October 13, 2014 11:13:00'),
  // tslint:disable-next-line:max-line-length
    comment: 'Charly dice: Lorem fistrum se calle ustée minim apetecan et caballo negroorl aliqua a peich ut. Lorem fistrum se calle ustée minim apetecan et caballo negroorl aliqua a peich ut. Lorem fistrum se calle ustée minim apetecan et caballo negroorl aliqua a peich ut.'
  },
  {
    name: 'Lola',
    date: new Date('January 6, 2018 11:13:00'),
  // tslint:disable-next-line:max-line-length
    comment: 'Lola dice: Lorem fistrum se calle ustée minim apetecan et caballo negroorl aliqua a peich ut. Lorem fistrum se calle ustée minim apetecan et caballo negroorl aliqua a peich ut. Lorem fistrum se calle ustée minim apetecan et caballo negroorl aliqua a peich ut.'
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
