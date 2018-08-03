import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-article',
  templateUrl: './my-article.component.html',
  styleUrls: ['./my-article.component.css'],
})
export class MyArticleComponent implements OnInit {

  constructor() { }

  article = {
    name: 'Ubuntu',
    pic: 'https://tse3.mm.bing.net/th?id=OIP.E-KxFdVXJc1VBYPC0lfDrwHaEL&pid=Api',
    content: `
      The word Ubuntu comes from Africa where they
      define ubuntu as the coming together of the 
      people in such a way that promotes community
      and being one for others. One of their mottos
      is 'I am because We are'. A powerful message 
      signifying the importance of commmunity and
      teamwork in any endeaver one wishes to endure`
  }

  ngOnInit() {
  }

}
