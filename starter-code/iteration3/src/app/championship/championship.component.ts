import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent implements OnInit {

  championships: Array<object> = [
    {
      year: '2013-2014',
      champion: 'Cavaliers',
      url: 'http://www.slamonline.com/wp-content/uploads/2010/06/new-cavaliers-wordmark.jpg',
      mvp: ['Slash', 'Jimmy Page']
    },
    {
      year: '2014-2015',
      champion: 'Spurs',
      url: 'https://goodlogo.com/images/logos/san_antonio_spurs_logo_3932.png',
      mvp: ['Chopin', 'Grieg']
    }
    {
      year: '2015-2016',
      champion: 'Den gylde stat',
      url: 'http://www.freestencilgallery.com/wp-content/uploads/2017/02/NBA-Golden-State-Warriors-Logo-Stencil-thumb.jpg',
      mvp: ['Banksy', 'Munch']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
