import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Iteration 1!';
  width =200;
  album = [
            {image:"http://blog.ironhack.com/wp-content/uploads/2017/01/best-coding-botcamp-ironhack-student-podcast-blog-header.jpg",place:"Ironhack Madrid"},
            {image:"http://blog.ironhack.com/wp-content/uploads/2016/07/hectorges-52-1024x683.jpg",place:"Ironhack Barcelona"},
            {image:"http://e01-expansion.uecdn.es/assets/multimedia/imagenes/2017/06/20/14979611169142.jpg",place:"ironhack Miami"}
          ];
}
