import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments= [{
    name: "Bobbo",
    date: new Date(),
    description: "lorem ipsum",
  },
  {
    name: "Willi",
    date: new Date(),
    description: "lorem ipsum ajdblaisbfoaisvc dajkfbiuadbfiadf ajkfbiabdif",
  }
]

  constructor() { }

  ngOnInit() {
  }

}
