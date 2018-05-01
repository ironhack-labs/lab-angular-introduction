import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  data = [
    {
      name:'Bobby Tables',
      description:'It seems difficult'
    },
    {
      name:'Jonhy Doe',
      description:'I´d like to know more'
    },
    {
      name:'María',
      description:'I´d like to study there'
    },
    {
      name:'Jesús',
      description:'It looks perfect for me'
    },
    {
      name:'Sergio',
      description:'Where can I get more info?'
    }
  ]
  constructor() { }

  buttonClickMethod(event, name, description){
    event.preventDefault();
    console.log(name, description)
  }
    


  ngOnInit() {
  }

}
