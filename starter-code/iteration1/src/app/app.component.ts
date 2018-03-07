import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Iteration One';

  album: Array<Object> = [
    {
      name: 'Rick',
      photo: 'https://http2.mlstatic.com/vinilo-decorativo-rick-n-morty-rick-sanchez-D_NQ_NP_833675-MLM26291459217_112017-F.jpg',
      description: 'This is pic 1'
    },
    {
      name: 'Morty',
      photo: 'https://i.imgur.com/BiA02pY.png?1',
      description: 'This is pic 2'
    },
    {
      name: 'Rick & Morty',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScL7CmfmNqZVzlrBvrTssPCFguLyBDC_sIjcTACtwmMkyzz26U',
      description: 'This is pic 2'
    }
  ];
}

