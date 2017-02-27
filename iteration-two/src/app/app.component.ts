import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Daily Mail';
  articles: Array<Object> = [
    {
      title: 'Trump wins election!',
      image: 'http://freebeacon.com/wp-content/uploads/2015/08/AP549813522930-540x345.jpg',
      description: 'In a huge upset, Donald Trump has defeated democratic contender, Hillary Clinton.'
    },
    {
      title: 'Trump is impeached!',
      image: 'http://i.perezhilton.com/wp-content/uploads/2016/11/prediction-professor-donald-trump-impeachment-cnn__oPt.jpg',
      description: 'After many protests and investigations, President Donald Trump to be impeached.'
    },
    {
      title: 'Ronald Reagan becomes president.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/GHW_Bush_presents_Reagan_Presidential_Medal_of_Freedom_1993.jpg',
      description: 'Rowdy rowdy ronda rousy. Let it go. Let it go!'
    }
  ];
}
