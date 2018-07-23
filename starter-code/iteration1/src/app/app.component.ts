import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IronGallery!';
  
  arr = [{img: 'https://cdn-images-1.medium.com/max/1000/1*vTB9s3-vabseGYBucM1aBA.png', title: 'Ironhack Madrid'},
         {img: 'https://www.arquitecturayempresa.es/sites/default/files/styles/n1000x540/public/imagenes/noticia/arquitecturayempresa_ironhack_01.jpg?itok=3w9b4gdm', title: 'Ironhack Barcelona'},
         {img: 'https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/2489/s1200/ironhack-20classroom.jpg', title: 'Ironhack Miami'}];
}
