import { Component, OnInit } from '@angular/core';
// import { url } from 'inspector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{
  title:string = "Anime"
  img:string = "https://media.giphy.com/media/XR9cbNEfzDrFe/giphy.gif"
  description:string = "My favorite Anime"
}
