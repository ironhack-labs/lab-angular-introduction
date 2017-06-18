import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comment-binding',
  templateUrl: './my-comment-binding.component.html',
  styleUrls: ['./my-comment-binding.component.css']
})
export class MyCommentBindingComponent {

  constructor() { }
 
   ngOnInit() { }
 
   comments: Object [] = [
     {
       name: 'Jess',
      com: 'Nice Article'
     },

       {
         name: 'David',
         com: 'Might consider this BootCamp.'
     }
  ];

}