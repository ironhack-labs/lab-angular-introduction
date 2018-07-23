import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Daily Project!';
  tagline = "You'll find nothing better to do."
  photos:Array<Object>=[
    {
      img:"http://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/ep_Astrocyte5_16x9.jpg?itok=GMIFyBxb",
      title:"Astrocyte Cell"
    },
    {
      img:"https://upload.wikimedia.org/wikipedia/commons/6/6d/GolgiStainedPyramidalCell.jpg",
      title:"Hyppocampus Pyramial Cell"
    },
    {
      img:"https://www.thoughtco.com/thmb/MGtRxJTDPwLpvknm7GRoTG7JKyg=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Neuron-5728bfaa5f9b589e34aa64b0.jpg",
      title:"Glial cell"
    }
  ]
}
