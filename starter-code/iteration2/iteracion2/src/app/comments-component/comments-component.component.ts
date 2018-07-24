import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  name = "Giorgio"
  conversation = "IronHack è la migliore scuola del mondo";
  name2 = "Francesco"
  conversation2 = "dovrebbe esserci un ironhack in Italia"
  constructor() { }

  ngOnInit() {
  }

}
