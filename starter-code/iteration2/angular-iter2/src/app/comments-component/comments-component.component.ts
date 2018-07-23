import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
//   Author: String;
//   Content: String;
  
//   constructor() { 
//     this.Author = 'Antonio esteban';
//     this.Content = 'Great!!';
//     }
//   ngOnInit() {
//   }

// }


  Comments: Array <Object> = [
    {
      Author: 'Antonio Esteban',
      Content: 'Great!'
    }, {
      Author: 'Juan García',
      Content: 'Cool!!'
    }, {
      Author: 'Tomás Aquino',
      Content: 'Barcelona la Bella'
    }
  ];
}




