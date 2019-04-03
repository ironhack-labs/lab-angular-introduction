import { Component } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.sass']
})
export class MainComponentComponent {
    title:string;
    image:string;
    description:string;
  
    constructor() { 
      this.title = 'Learn how to code with Ironhack';
      this.image = 'https://madridsecreto.co/wp-content/uploads/2019/01/Los_pueblos_mA_s_bonitos_de_Madrid.jpg';
      this.description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }


}
