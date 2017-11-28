import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
  article = new Article (
    'BIG MOUTH AL ATAQUE',
    'http://www.indiewire.com/wp-content/uploads/2017/10/big_mouth_s01e03_8m22s12047f.jpeg',
    'WTF'
  );
}

class Article {
  constructor(
    public title:string,
    public image:string,
    public description:string,
  ){}
}
