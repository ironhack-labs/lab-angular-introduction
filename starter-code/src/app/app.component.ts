import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos:Array<any> = [{src:'/assets/1.png', description:"Homer 1"},
                       {src:'/assets/2.png', description:"Homer 2"},
                       {src:'/assets/3.png', description:"Homer 3"}];
}
