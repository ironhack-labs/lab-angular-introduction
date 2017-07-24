import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration2-b',
  templateUrl: './iteration2-b.component.html',
  styleUrls: ['./iteration2-b.component.css']
})
export class Iteration2BComponent implements OnInit {

  comments: Array <Object> =
  [
    {
      title : 'Comentario1',
      author: 'Mike',
      content : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..'
    },
    {
      title : 'Comentario2',
      author: 'MikeMike',
      content : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..'
    },
    {
      title : 'Comentario3',
      author: 'MikeMikeMike',
      content : 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..'

    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
