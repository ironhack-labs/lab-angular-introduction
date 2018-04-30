import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  title: String = "Learn to code with Ironhack";
  image: String = "https://www.arquitecturayempresa.es/sites/default/files/content/arquitecturayempresa_ironhack_02.jpg";
  description: String = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel est ac ligula tincidunt aliquam. Donec tincidunt nulla quis elit aliquam facilisis. Nam ultricies blandit consectetur. Nam convallis diam vitae mauris viverra aliquet. Nunc vehicula nisi at tincidunt condimentum. Fusce cursus cursus scelerisque. Mauris tempor blandit felis. Sed tempus, turpis et mollis pharetra, lacus dui porta tortor, sit amet tristique quam leo eu leo. Aenean nibh turpis, facilisis at cursus sit amet, dapibus eget dui. Curabitur ut tincidunt urna. Curabitur sodales luctus lectus, eu mattis erat aliquam at. Ut ligula eros, sagittis at congue eu, gravida cursus purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec fermentum nisi eu diam efficitur, et tempus leo consequat. Aliquam in tristique elit. ";

  constructor() { }

  ngOnInit() {
  }

}
