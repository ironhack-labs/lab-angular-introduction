import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  article = {
    title: 'Titulo',
    image: 'https://cdn.pixabay.com/photo/2016/04/28/13/51/pink-flower-1358936_960_720.jpg',
    // tslint:disable-next-line:max-line-length
    description: 'Lorem fistrum se calle ustée minim apetecan et caballo negroorl aliqua a peich ut. Lorem fistrum se calle ustée minim apetecan et caballo negroorl aliqua a peich ut. Lorem fistrum se calle ustée minim apetecan et caballo negroorl aliqua a peich ut.'
  };
  constructor() { }

  ngOnInit() {
  }

}
