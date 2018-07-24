import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title: String;
  src: String;
  description;
  constructor() { 
    this.title = 'Artículo1';
    this.src = 'https://static.barcelona.com/var/plain/storage/images/promociones/blocks/commercial/w_barcelona/9595214-2-fre-FR/w_barcelona_block-selection.jpg';
    this.description = 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
    }
  

  ngOnInit() {
  }

}

 
