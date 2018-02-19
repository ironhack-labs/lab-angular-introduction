import { Component, OnInit } from '@angular/core';
import { commentInterface, commentListInterface } from './interfaces';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

/*class comment implements commentInterface{

  name:string;
  description:string;
  updatedAt: Date;

  constructor(name:string, description:string){
    this.name = name;
    this.description = description;
    this.updatedAt = new Date(Date.now());
  }

}

class commentList implements commentListInterface{

  comments = Array<comment>;
  constructor() { 
    this.comments = [];
  }
    
  addTask(comment: comment): void {
    this.comments.push(comment);
  }
}*/


export class CommentsComponent implements OnInit {

  title = 'Comments';
  name ='Boby Tables';
  description = 'It seems quite';
  updatedAt= new Date(Date.now());

  constructor() { 
  }
 
  ngOnInit() {
  }

}
