import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   familyPictures: Array<string> = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZvhDSoP1B-Ox9jirsRGWoek5-83E57_CnSdQnV64VZDgoyHw',
 ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zJHGFfvm1zg4Rek_MWgK1YqOU7xu0RZEahIJn6Nlnzo5wHsirQ",
,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFSlykLh6DX_KLySvvOrv8grQ1vRclpliKr1pzZQvPqOmnSuVIHg"];
}
