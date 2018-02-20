import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IH campus image book';
  campusArray:Array <string>=["Ironhack Madrid", "Ironhack Barcelona","Ironhack Miami"] ;
  imgArray:Array <string>=[ "http://www.meta-studio.eu/resources/files/filemanager/source/IRONHACK%20MADRID/23.jpg","http://blog.ironhack.com/wp-content/uploads/2016/07/hectorges-54-1024x683.jpg","https://pbs.twimg.com/media/DBKsHZkXgAAXANq.jpg"];
}
