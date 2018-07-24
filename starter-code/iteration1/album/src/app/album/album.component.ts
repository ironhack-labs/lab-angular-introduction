import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album1 = 'http://static1.bellezaextraordinaria.com.mx/articles/4/11/53/4/@/96109-adopta-el-rubio-oscuro-y-deja-tus-mechas-article_news-5.jpg'
  album2 = 'https://www.ecestaticos.com/imagestatic/clipping/dde/008/dde008563f348ba1187763b95188cb6c/hay-un-mensaje-oculto-detras-de-estas-fotos-de-instagram-eres-capaz-de-verlo.jpg?mtime=1475678336'
  album3 = 'https://www.istockphoto.com/resources/images/PhotoFTLP/img_75929395.jpg'

  constructor() { }
  ngOnInit() {
  }

}
