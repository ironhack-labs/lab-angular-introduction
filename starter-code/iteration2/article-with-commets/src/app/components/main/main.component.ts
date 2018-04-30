import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  articles: Array<Object> = [
    {
      title: "Learn how to code with Ironhack",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis reiciendis, reprehenderit vero aut porro enim, expedita nulla similique odit assumenda quos a alias saepe esse, corporis quae tempore pariatur nisi!",
      img:
        "https://img.theculturetrip.com/840x440/smart/wp-content/uploads/2017/01/gran-via-1024x684.jpeg"
    },
    {
      title: "title2",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis reiciendis, reprehenderit vero aut porro enim, expedita nulla similique odit assumenda quos a alias saepe esse, corporis quae tempore pariatur nisi!",
      img:
        "https://img.theculturetrip.com/840x440/smart/wp-content/uploads/2017/01/gran-via-1024x684.jpeg"
    },
    {
      title: "title3",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis reiciendis, reprehenderit vero aut porro enim, expedita nulla similique odit assumenda quos a alias saepe esse, corporis quae tempore pariatur nisi!",
      img:
        "https://img.theculturetrip.com/840x440/smart/wp-content/uploads/2017/01/gran-via-1024x684.jpeg"
    },
    {
      title: "title4",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis reiciendis, reprehenderit vero aut porro enim, expedita nulla similique odit assumenda quos a alias saepe esse, corporis quae tempore pariatur nisi!",
      img:
        "https://img.theculturetrip.com/840x440/smart/wp-content/uploads/2017/01/gran-via-1024x684.jpeg"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
