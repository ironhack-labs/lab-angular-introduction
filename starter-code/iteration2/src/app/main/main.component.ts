import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  styleUrls: ['./main.component.css'],
  template: `<div class="container">
      <h1 class="center"> {{ title }} </h1>
      <p class="center"> <img src={{image}} alt=""> </p>
      <p class="center"> {{description}} </p>
  </div>`
})
export class MainComponent implements OnInit {
  title = 'Learn how to code with Ironhack in Tokyo!';
  image = '/assets/tokyo.jpg';
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique condimentum vehicula. Vestibulum eget arcu dapibus urna aliquet feugiat. Aenean volutpat felis leo, eget viverra lectus maximus eu. Integer augue massa, placerat sed diam in, sollicitudin convallis nisi. Phasellus tempor finibus est eget aliquam. Mauris consectetur augue et fermentum porttitor. Integer laoreet sodales augue, at iaculis tellus tristique a. Nullam aliquet nunc faucibus, eleifend turpis et, pretium libero. Sed faucibus ligula vel elit consectetur eleifend. Sed malesuada neque vel sem suscipit, ut tincidunt lacus tristique.';
  constructor() { }

  ngOnInit() {
  }

}
