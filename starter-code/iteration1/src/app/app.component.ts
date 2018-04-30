import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  images: Array<Object> = [
    {
      id: 1,
      title: 'cat1',
      src: 'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ny85NTkvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzYzOTcxNjY1LmpwZw=='
    },
    {
      id: 2,
      title: 'cat2',
      src: 'http://a57.foxnews.com/images.foxnews.com/content/fox-news/lifestyle/2017/11/09/how-to-keep-cat-from-scratching-your-sofa-to-shreds/_jcr_content/par/featured_image/media-0.img.jpg/931/524/1510172827500.jpg?ve=1&tl=1&text=big-top-image'
    },
    {
      id: 3,
      title: 'cat3',
      src: 'https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg'
    }
  ]
}
