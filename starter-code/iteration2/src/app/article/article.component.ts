import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  title: string;
  image: string;
  description: string;

  constructor() {
    this.title = 'Learn how to code width ironhack';
    this.image = 'https://www.ironhack.com/f836539fe909d33c21a722306cfd6bb7.jpg';
    this.description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consectetur necessitatibus 
    quis nesciunt eveniet neque eligendi numquam, velit repudiandae unde ab laborum voluptas, 
    enim maxime doloribus nisi adipisci ducimus porro.`;
  }

  ngOnInit() {
  }

}
