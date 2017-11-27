import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  author: string = `Torgeir`;
  text: string = `Bacon ipsum dolor amet kielbasa sirloin strip steak pork turducken rump ground round. Biltong turkey bresaola, andouille meatloaf tri-tip leberkas short loin rump shankle swine tongue. Sausage jowl strip steak, brisket biltong spare ribs shankle pork belly pig ham ham hock turducken salami filet mignon.`

  constructor() { }

  ngOnInit() {
  }

}
