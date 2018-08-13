import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  title = "Comments"

  uN1 = "Bobby Tables"
  date1= "19/07/2016 19:30"
  comment1 = "It seems quite complicated"
  
  uN2 = "Ironhack School"
  date2= "19/07/2016 20:35"
  comment2 = "We give you a pre-work, that you have to do at home, that will help you to fce the course without any problem :)"

  formTitle = "Add your comment"
  name = "Name:"
  description = "Description:"

  constructor() { }

  ngOnInit() {
  }

}
