import { Component, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  title = "Bobby"
  content = "Lorem fistrum quietooor al ataquerl no puedor la caidita torpedo a peich a gramenawer. Pecador la caidita va usté muy cargadoo va usté muy cargadoo. "
  date = Date();
  constructor() {

  }

  ngOnInit() {
  }

}
