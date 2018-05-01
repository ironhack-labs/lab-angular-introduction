import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cool photo album';
  content: Array<Object> = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMd3bxrYDmayZ9trfV-9XjVejM3E8kWZrvW4vkenDAGPyeRknE",
      description: "Developer 1"
    }, {
      img: "https://cdn4.techworld.com/cmsdata/features/3612808/Software_developers_working_computer_thumb800.jpg",
      description: "Developer 1"

    }, {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzGoFpeI6vzrOnwczam48QoPSRC38OHI9SPnor1KhhsHQ97Pt2jQ",
      description: "Developer 3"
    }
  ]
}
