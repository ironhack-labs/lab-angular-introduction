import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comments-component',
  templateUrl: './my-comments-component.component.html',
  styleUrls: ['./my-comments-component.component.css']
})
export class MyCommentsComponentComponent implements OnInit {
  comments: Array<Comments> = [
    new Comments("Jean", "Le fromage le fromage le fromage le fromage"),
    new Comments("Juan", "El queso el queso el queso el queso"),
    new Comments("John", "The cheese the cheese the cheese the cheese")
  ]
  constructor() { }

  ngOnInit() {
  }

}

class Comments{
  constructor(
    public username: string,
    public commentary: string
  ){}
}
