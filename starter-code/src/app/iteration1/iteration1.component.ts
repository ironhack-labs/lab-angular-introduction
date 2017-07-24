import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration1',
  templateUrl: './iteration1.component.html',
  styleUrls: ['./iteration1.component.css']
})
export class Iteration1Component {

  title = 'Photo Album';
  photo1 : string = "/assets/photo1.jpg";
  photo2 : string = "/assets/photo2.jpg";
  photo3 : string = "/assets/photo3.jpg";

}
