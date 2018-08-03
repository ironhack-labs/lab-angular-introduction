import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular2 Lab';
  picsOfCats: Array<any>= [
    {
      id: 1,
      name: "Fat Cat #1",
      url: "https://fallinpets.com/wp-content/uploads/2018/01/fat-cat.jpg"
    },
    {
      id: 2,
      name: "Fat Cat #2",
      url: "http://www.post-gazette.com/image/2017/01/28/1140x_q90_a10-7_cTC_ca14,35,2565,1736/PetPoints0128.jpg"
    },
    {
      id: 3,
      name: "Fat Cat #3",
      url: "https://mojly.com/wp-content/uploads/2017/11/fat-cat-pics-https3A2F2Fi.imgur_.com2FImDxsFf.png"
    }

  ];
}
