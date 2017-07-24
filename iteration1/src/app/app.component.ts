import { Component } from '@angular/core';

export class Photo {
  description: string;
  source: string;
}

const photos: Photo[] = [
  {
    description: 'test 1',
    source: 'https://pbs.twimg.com/profile_images/2821613356/a15ac328aca48742f6fea77546671b70_400x400.jpeg'
  },
  {
    description: 'test 2',
    source: 'https://pbs.twimg.com/profile_images/507819548834148352/jyx1JOS-_400x400.jpeg'
  },
  {
    description: 'test 3',
    source: 'https://pbs.twimg.com/profile_images/3103894633/e0d179fc5739a20308331b432e4f3a51_400x400.jpeg'
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Iteration 1';
  photos: Photo[] = photos;
}
