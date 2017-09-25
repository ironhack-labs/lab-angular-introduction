import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration-2-main',
  templateUrl: './iteration-2-main.component.html',
  styleUrls: ['./iteration-2-main.component.css']
})
export class Iteration2MainComponent implements OnInit {
  title:string = 'Learn how to code with Ironhack';
  image:string = 'https://granviacapital.es/wp-content/uploads/2016/02/apartamentos-uso-turistico.jpg';
  description:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae urna urna. Aliquam id vulputate lectus, et auctor ex. Curabitur at purus nec odio pulvinar congue. Aliquam pretium quis nulla id sollicitudin. Nam consequat nibh vitae lacus pulvinar malesuada. Vestibulum et laoreet urna, quis laoreet leo. Aliquam eu finibus tellus. Aliquam quam sem, lacinia eu quam sollicitudin, sollicitudin pellentesque augue. Aenean vitae pretium urna, sit amet malesuada est. Sed nec ex venenatis, consectetur neque vitae, dignissim orci. Nam quis ornare eros, vitae bibendum tortor. Pellentesque quis tellus elementum, varius velit pretium, vehicula mi. Nunc maximus dui at orci tempor mollis. Curabitur dapibus ornare aliquet.';

  constructor() { }

  ngOnInit() {
  }

}
