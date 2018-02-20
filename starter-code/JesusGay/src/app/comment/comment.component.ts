import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
comment:string="Alojarse en febrero en Madrid tiene alicientes como el ambiente cálido de este hotel singular, rodeado por un jardín centenario de cedros y plantas de flor en Arturo Soria";

  ngOnInit() {
  }

}
