import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment-component.component.html',
  styleUrls: ['./comment-component.component.css']
})
export class CommentComponentComponent {
  comments = [{
    creator:'Manu',
    date: new Date(),
    content: 'Buenisima la serie, me encanto de principio a fin'
  },{
    creator:'Alberto',
    date: new Date(),
    content: 'Joder menudo crack'
  },{
    creator:'Marc',
    date: new Date(),
    content: 'Me la apunto'
  },{
    creator:'Andrei',
    date: new Date(),
    content: 'Chicuelos que gran serie'
  }];
}
