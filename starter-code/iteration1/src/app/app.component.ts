import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content: Array<Object> =[
    {
      name : "Foto 1",
      img : "https://bloximages.newyork1.vip.townnews.com/elvocero.com/content/tncms/assets/v3/editorial/0/84/08452510-76e6-11e7-93f7-37f244bb10a5/5980c670ab2fe.image.jpg"
    },{
      name : "Foto 2",
      img : "http://timeinc.brightcove.com.edgesuite.net/rtmp_uds/293884104/201504/3149/293884104_4175543795001_Kanye1-1280.jpg?pubId=293884104&videoId=4175416937001"
    },{
      name : "Foto 3",
      img : "https://www.billboard.com/files/media/03-David-Guetta-2017-billboard-1548.jpg" 
    }
  ];
}
