import { Component, OnInit } from '@angular/core';

export class Article {
  title: string;
  imageUrl: string;
  description: string;
}

const DESCRIPTION = 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et purus imperdiet,' +  
    'tincidunt augue quis, eleifend justo. Vestibulum ac neque bibendum, aliquam eros sed,' + 
    'faucibus lectus. Aenean pretium finibus tortor, ac ultricies ante mollis sit amet.' +
    'Fusce sit amet vestibulum augue. Nunc in nulla eu magna ultricies eleifend.' +
    'Pellentesque quis scelerisque augue, ut sagittis velit. Nam bibendum feugiat posuere.' +
    'Mauris consectetur, lorem pretium sagittis consectetur, leo dolor egestas ligula,' +
    'vel aliquet odio magna vel augue. Nunc ultricies nec erat eu facilisis. Sed gravida scelerisque dignissim.';
@Component({
  selector: 'app-the-article',
  templateUrl: './the-article.component.html',
  styleUrls: ['./the-article.component.css']
})
export class TheArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  
  article : Article = {
    title: 'Rounded Corners',
    imageUrl: 'https://www.w3schools.com/bootstrap/cinqueterre.jpg',
    description: DESCRIPTION,
  }
}
