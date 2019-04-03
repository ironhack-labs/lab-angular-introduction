import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.sass']
})
export class MainComponentComponent{
  title:string 
  img:string 
  description:string 
  constructor() {
    this.title = 'Learn how to code with Ironhack'
    this.img = "http://delpozoaluniverso.com/wp-content/uploads/2017/06/IMG_0979.jpg"
    this.description = "Aqui va un lorem ipsum demasiado largo para mi gusto"
  }

}
