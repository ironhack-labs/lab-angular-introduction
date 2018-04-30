import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ironhack Photo Album';

  album: Object = [
    {
      id: 1,
      category: 'photo',
      description: 'Ironhack BCN'
    }, {
      id: 2,
      category: 'photo',
      description: 'Ironhack Madrid'
    }, {
      id: 3,
      category: 'photo',
      description: 'Ironhack Miami'
    }
  ];
}
