import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  submit(){
    const name = document.getElementbyId("name").value;
    const comment = document.getElementbyId("comment").value;
    alert(name)
  }
  constructor() { 
  }
    
  ngOnInit() {
  }

}
