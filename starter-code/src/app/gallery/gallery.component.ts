import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  gallery: Array<Object>;
  constructor() {
    this.gallery  = [
    {
      id: 1,
      url: 'https://pbs.twimg.com/media/C804uGbXsAE3nTK.jpg',
      description: 'Ironhack Madrid'
    }, {
      id: 2,
      url: 'http://blog.ironhack.com/wp-content/uploads/2016/07/hectorges-54-1024x683.jpg',
      description: 'Ironhack Barcelona'
    }, {
      id: 3,
      url: 'https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/894/original/ironhack-pre-249.jpg',
      description: 'Ironhack Miami'
    }
  ];


  }

  ngOnInit() {
  }

}
