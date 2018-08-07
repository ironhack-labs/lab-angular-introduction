import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // constructor(public PicUrl: string, public title: string) {
    images: Array<Object> = [{
      PicUrl: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01-400x267.jpg',
      title: 'Dog'
  },{
      PicUrl: 'https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/165/76/87490163.jpg',
      title: 'Cat'
  },{
      PicUrl: 'http://www.firstaidforfree.com/wp-content/uploads/2015/02/FISHSHAPED.png',
      title: 'Fish'
  }];
    
  }
