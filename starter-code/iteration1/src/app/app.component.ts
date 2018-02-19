import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo Album';
  images = [{
    url: 'https://cdn.pixabay.com/photo/2018/02/18/19/43/ball-3163271__340.jpg',
    title: 'bola hojas'},
    {
    url: 'https://cdn.pixabay.com/photo/2017/01/06/23/21/soap-bubble-1959327_960_720.jpg',
    title: 'bola nieve'},
    {
    url: 'https://cdn.pixabay.com/photo/2017/05/09/21/49/gecko-2299365_960_720.jpg',  
    title: 'bichito'}]  
}
