import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-proprty-binding',
  templateUrl: './my-proprty-binding.component.html',
  styleUrls: ['./my-proprty-binding.component.css']
})
export class MyProprtyBindingComponent implements OnInit {
  myImageSource: string = 'https://media.giphy.com/media/26gYPjuK6O0H63GyQ/source.gif';

  images: Array<string> = [
  'https://media.giphy.com/media/5wwBUPDoq7eO4/giphy.gif',
  'https://media.giphy.com/media/wFbI8gwCfCxeo/giphy.gif',
  'https://media.giphy.com/media/FhC19FC3Zr55u/giphy.gif',
  'https://media.giphy.com/media/bcWtZEuGZhDZm/giphy.gif',
  'https://media.giphy.com/media/cU5WkHm5dLLaw/giphy.gif'



];

  constructor() { }

  ngOnInit() {
  }

  changeImage() {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    this.myImageSource = this.images[randomIndex];
  }

}
