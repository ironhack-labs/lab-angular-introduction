import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  comments = [{
    name: 'Trancos',
    description:'Lorem fistrum a wan qué dise usteer no te digo trigo por no llamarte Rodrigor al ataquerl. Llevame al sircoo tiene musho peligro jarl papaar papaar te voy a borrar el cerito. Se calle ustée ahorarr de la pradera al ataquerl ese hombree mamaar ',
    date: new Date ('2018/02/19'),
  },
  {
    name: 'Gandalf',
    description:'Lorem fistrum a wan qué dise usteer no te digo trigo por no llamarte Rodrigor al ataquerl. Llevame al sircoo tiene musho peligro jarl papaar papaar te voy a borrar el cerito. Se calle ustée ahorarr de la pradera al ataquerl ese hombree mamaar ',
    date: new Date ('2018/02/19'),
  },
  {
    name: 'Frodo',
    description:'Lorem fistrum a wan qué dise usteer no te digo trigo por no llamarte Rodrigor al ataquerl. Llevame al sircoo tiene musho peligro jarl papaar papaar te voy a borrar el cerito. Se calle ustée ahorarr de la pradera al ataquerl ese hombree mamaar ',
    date: new Date ('2018/02/19')
  },
  {

    name: 'Sam',
    description:'Lorem fistrum a wan qué dise usteer no te digo trigo por no llamarte Rodrigor al ataquerl. Llevame al sircoo tiene musho peligro jarl papaar papaar te voy a borrar el cerito. Se calle ustée ahorarr de la pradera al ataquerl ese hombree mamaar ',
    date: new Date ('2018/02/19')

 }]
  constructor() { }

  ngOnInit() {
  }

}
