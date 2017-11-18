import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent {
  article:  [
    {
      title: "Hello World",
      image: string = 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=imgres&cd=&ved=0ahUKEwioiOfWkKvXAhXCOBoKHXn8AW4QjBwIBA&url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FyRzrq5XwslrWM%2Fsource.gif&psig=AOvVaw21EWmkJ72R6660pa-6yGg4&ust=1510098018791119',
      description: 'Dog',
    }
  ]
}
