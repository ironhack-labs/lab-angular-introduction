import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Gabo';
  Fotos: Array<Object>=[
    {
      title: "Kkroto",
      picture: "http://www.dragonball-paradijs.com/tekenfilm/dbz/image/232/232-92.jpg"
    },
    {
      title: "vegeta",
      picture: "https://pre00.deviantart.net/ffb7/th/pre/i/2016/006/a/b/vegeta_fusion__facudibuja_by_facudibuja-d9n1mw5.png"
    },
    {
      title: "Vegito",
      picture: "http://3.bp.blogspot.com/-8ifX5dTnAms/UFIso2XSlqI/AAAAAAAABVY/nJkK70d4dWU/s1600/Dragon+Ball+Z+La+fusi%25C3%25B3n+de+Goku+y+Vegeta.....png"
    }
  ]
}
