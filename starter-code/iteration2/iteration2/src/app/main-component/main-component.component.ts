import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title = 'Article with Angular 2';
  constructor() { }

  ngOnInit() {
  }

  articulo={
    title:"Article with Angular 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque ante quam, non tincidunt purus ullamcorper quis. Quisque a finibus elit, in commodo odio. Integer molestie lectus non metus vestibulum bibendum. In vulputate erat lectus, in lobortis massa gravida non. Duis tincidunt erat vitae neque tristique egestas. Pellentesque sem odio, volutpat in dictum imperdiet, fringilla id lacus. Nulla rutrum suscipit tortor a varius. Fusce sollicitudin sed felis nec egestas. Suspendisse venenatis metus eleifend, euismod magna sit amet, pulvinar tortor. Nunc dignissim enim sed augue sagittis, at vulputate massa pulvinar. Suspendisse at sem maximus, dictum mauris ut, dapibus turpis. Duis eu magna sit amet est sagittis dapibus. Donec iaculis ut purus nec dictum. Cras interdum posuere ligula, eget sollicitudin leo feugiat sagittis.",
    image: "https://www.foxandbriar.com/wp-content/uploads/2016/02/Easy-Chicken-Ramen-9-of-10.jpg"
  }
}
