import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  myArticles: any[] = [
    {title: "Art Basel Cancelled!", image: "https://media.giphy.com/media/4L5Iq28FaDzxK/giphy.gif", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nisl laoreet urna hendrerit posuere a vitae tellus. Sed sodales lorem sed arcu malesuada, nec aliquet nunc interdum. Duis mattis tellus sapien, vel luctus nulla tincidunt in. Pellentesque congue porta augue non suscipit. Proin varius libero ut justo tempor, vitae blandit diam hendrerit. Nulla sodales velit non dolor dignissim elementum. Morbi gravida libero ut turpis fermentum accumsan. Vestibulum eros dolor, pharetra at euismod ut, tristique sit amet dui. Cras feugiat libero sit amet felis facilisis, vel mattis leo porttitor. Maecenas in tristique erat. Duis et tempus lacus. Nulla ligula quam, ullamcorper egestas nisl eget, finibus porta neque. Vestibulum convallis ligula ut tempor interdum. Donec rutrum a tellus a sollicitudin. In ultrices erat nisl, eu convallis dolor accumsan ac. Ut id bibendum sem."}
  ]

  constructor() { }

  ngOnInit() {
  }

}
