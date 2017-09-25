import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-iteration-2-comments',
  templateUrl: './iteration-2-comments.component.html',
  styleUrls: ['./iteration-2-comments.component.css']
})
export class Iteration2CommentsComponent implements OnInit {
  comments: Array<Object> = [
    {
      name: 'Pedro',
      comment: 'Lorem fistrum caballo blanco caballo negroorl ahorarr no puedor'
      + ' tiene musho peligro ese que llega va usté muy cargadoo a wan va usté '
      + ' muy cargadoo ese hombree te va a hasé pupitaa.'
    }
  ];
  constructor() {}

  ngOnInit() {}

  getvalues(name: String, comment: String) {
    this.comments.push({
      name,
      comment
    });
  }
}
