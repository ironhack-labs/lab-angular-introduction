import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-component',
  templateUrl: './album-component.component.html',
  styleUrls: ['./album-component.component.css']
})
export class AlbumComponentComponent implements OnInit {

img1 = "https://demoalto-impresionesaerea.netdna-ssl.com/2018/02/sao.jpg";
img2 = "https://i.kinja-img.com/gawker-media/image/upload/s---dqo8P5r--/c_scale,f_auto,fl_progressive,q_80,w_800/o29guozah93r4kd4qigi.jpg";
img3 = "http://stuffpoint.com/sword-art-online/image/77362-sword-art-online-kiritos-swords.jpg";

  constructor() {
   }

  ngOnInit() {
  }
}
