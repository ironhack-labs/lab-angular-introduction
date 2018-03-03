import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  comment1:string='holi caracoli';
  description1:string='alknsdal kjsdlaks dlaj sdlkajn sdlkajn sdlkaj nsdlkaj sndlkaj sdlk ad';
  comment2:string='adios caracoli';
  description2:string='alknsdal kjsdlaks dlaj sdlkajn sdlkajn sdlkaj nsdlkaj sndlkaj sdlk ad';

  constructor() { }

  ngOnInit() {
  }

}
