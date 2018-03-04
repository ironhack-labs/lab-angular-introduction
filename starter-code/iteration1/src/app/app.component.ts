import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Iteration1';

  offices: Array<{picture: string, location: string}> = [
    {picture:"https://www.ironhack.com/0be4adcffad57cfca79dbf64b3889fc2.jpg", location:"Ironhack Madrid"},
    {picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNbZxyikEnDBOhvwViNw4sLSRZerH808aDVjbH6PjzvxXlLg9", location:"Ironhack Barcelona"},
    {picture:"http://blog.ironhack.com/wp-content/uploads/2017/01/best-coding-botcamp-ironhack-student-podcast-blog-header.jpg", location:"Ironhack Miami"}
  ]
}
