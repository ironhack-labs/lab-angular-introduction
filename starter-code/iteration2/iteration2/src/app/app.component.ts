import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
   familyPictures: Array <Object> = [

  {
    pictures:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZvhDSoP1B-Ox9jirsRGWoek5-83E57_CnSdQnV64VZDgoyHw",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.e leap into electronic",
  },
  {
    pictures:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zJHGFfvm1zg4Rek_MWgK1YqOU7xu0RZEahIJn6Nlnzo5wHsirQ",
    description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it loo",
  },
  {
    pictures:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFSlykLh6DX_KLySvvOrv8grQ1vRclpliKr1pzZQvPqOmnSuVIHg",
    description:"op publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, some",
  }
]
}
