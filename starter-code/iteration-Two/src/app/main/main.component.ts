import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  article:Object;

  constructor() { 
    this.article = { 
      title: 'Learn how to code with Ironhack',
      image: 'https://learntocodewith.me/wp-content/themes/remixx/images/logo.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim tempus est vitae bibendum. Proin maximus, enim et facilisis ullamcorper, sapien nisi maximus arcu, vitae imperdiet nibh lectus eget nisi. Curabitur tristique laoreet euismod. Integer mattis in urna eu sollicitudin. Nunc ut quam ante. Curabitur tempus velit non viverra efficitur. Curabitur vel tincidunt mauris, ut rhoncus ante.'
     };
   }

  ngOnInit() {
  }

}
