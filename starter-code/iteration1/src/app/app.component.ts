import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  pictures: Array<Picture> = [
    new Picture("https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Cannes/Cannes-getting-there-monaco.jpg?imwidth=480", "Awesome"),
    new Picture("https://blog.cannes-destination.com/wp-content/uploads/2017/03/Cannes-city-guide004-e1490974866443.jpg", "Summer"),
    new Picture("https://www.msccruises.co.uk/en-gb/Assets/cannes_intro_3564_12333_433-280_Images.jpg", "Water"),
  ]
}

class Picture {
  constructor(
    public picture: string, 
    public description: string
  ){}
}
