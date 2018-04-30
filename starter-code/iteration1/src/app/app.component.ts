import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NICOLAS CAGE *****';
  content: Array<Object> = [
  {src:"https://s.aolcdn.com/hss/storage/midas/627f1d890718ff2c58318a280145a153/203216448/nicholas-cage-con-air.jpg", description: "Nicolas H&S"},
  {src:"http://cdn.revistagq.com/uploads/images/thumbs/201428/nicolas_cage_8391_322x241.jpg", description: "Nicolas Reflectivo"},
  {src:"http://i0.kym-cdn.com/photos/images/original/000/727/175/b7a.png", description: "Nicolas padre de familia"}
  ];
}
