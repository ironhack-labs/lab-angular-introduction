import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  article: any = [
    { title: 'Article Example',
      image: 'https://media.giphy.com/media/4LLJsh3K47Gwg/giphy.gif',
      description: 'Article Description',
      comments:[
        {
          name: 'User comment',
          date: '01-16-2017',
          comment: 'This is my comment on the article'
        }],
    }
  ];
}
